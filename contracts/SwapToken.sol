// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
pragma abicoder v2;

// Imports
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SingleSwapToken {
    ISwapRouter public constant swapRouter =
        ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function swapExactInputString(
        uint _amountIn
    ) external returns (uint _amountOut) {
        TransferHelper.safeTransferFrom(
            WETH9,
            msg.sender,
            address(this),
            _amountIn
        );
        TransferHelper.safeApprove(WETH9, address(swapRouter), _amountIn);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: WETH9,
                tokenOut: DAI,
                fee: 4000,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: _amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });
        _amountOut = swapRouter.exactInputSingle(params);
    }

    function swapExactOutputString(
        uint _amountOut,
        uint _amountInMaximum
    ) external returns (uint _amountIn) {
        TransferHelper.safeTransferFrom(
            WETH9,
            msg.sender,
            address(this),
            _amountInMaximum
        );
        TransferHelper.safeApprove(
            WETH9,
            address(swapRouter),
            _amountInMaximum
        );

        ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter
            .ExactOutputSingleParams({
                tokenIn: WETH9,
                tokenOut: DAI,
                fee: 4000,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: _amountOut,
                amountInMaximum: _amountInMaximum,
                sqrtPriceLimitX96: 0
            });
        _amountIn = swapRouter.exactOutputSingle(params);
        if (_amountIn < _amountInMaximum) {
            TransferHelper.safeApprove(WETH9, address(swapRouter), 0);
            TransferHelper.safeTransfer(
                WETH9,
                msg.sender,
                _amountInMaximum - _amountIn
            );
        }
    }
}
