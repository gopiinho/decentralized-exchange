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
    address public constant BUSD = 0x4Fabb145d64652a948d72533023f6E7A623C7C53;
    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function swapExactInputString(
        uint _amountIn
    ) external returns (uint _amountOut) {
        TransferHelper.safeTransferFrom(
            USDC,
            msg.sender,
            address(this),
            _amountIn
        );
        TransferHelper.safeApprove(USDC, address(swapRouter), _amountIn);

        ISwapRouter.ExactInputSingleParams memory parmas = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: WETH9,
                tokenOut: BUSD,
                fee: 4000,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: _amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

        _amountOut = swapRouter.exactInputSingle(parmas);
    }

    function swapExactOutputString(
        uint _amountOut,
        uint _amountInMaximum
    ) external returns (uint _amountIn) {
        TransferHelper.safeTransferFrom(
            USDC,
            msg.sender,
            address(this),
            _amountInMaximum
        );
        TransferHelper.safeApprove(USDC, address(swapRouter), _amountInMaximum);

        ISwapRouter.ExactOutputSingleParams memory parmas = ISwapRouter
            .ExactOutputSingleParams({
                tokenIn: USDC,
                tokenOut: BUSD,
                fee: 4000,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: _amountOut,
                amountInMaximum: _amountInMaximum,
                sqrtPriceLimitX96: 0
            });
        _amountIn = swapRouter.exactOutputSingle(parmas);
        if (_amountIn < _amountInMaximum) {
            TransferHelper.safeApprove(USDC, address(swapRouter), 0);
            TransferHelper.safeTransfer(
                USDC,
                msg.sender,
                _amountInMaximum - _amountIn
            );
        }
    }
}
