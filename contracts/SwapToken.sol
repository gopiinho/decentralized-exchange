// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

// Imports
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SingleSwapToken {
    ISwapRouter public constant swapRouter =
        ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    address public constant dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant weth9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant usdc = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    function swapExactInputSingle(
        uint _amountIn
    ) external returns (uint _amountOut) {
        TransferHelper.safeTransferFrom(
            weth9,
            msg.sender,
            address(this),
            _amountIn
        );
        TransferHelper.safeApprove(weth9, address(swapRouter), _amountIn);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: weth9,
                tokenOut: dai,
                fee: 3000,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: _amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });
        _amountOut = swapRouter.exactInputSingle(params);
    }

    function swapExactOutputSingle(
        uint _amountOut,
        uint _amountInMaximum
    ) external returns (uint _amountIn) {
        TransferHelper.safeTransferFrom(
            weth9,
            msg.sender,
            address(this),
            _amountInMaximum
        );
        TransferHelper.safeApprove(
            weth9,
            address(swapRouter),
            _amountInMaximum
        );

        ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter
            .ExactOutputSingleParams({
                tokenIn: weth9,
                tokenOut: dai,
                fee: 3000,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: _amountOut,
                amountInMaximum: _amountInMaximum,
                sqrtPriceLimitX96: 0
            });
        _amountIn = swapRouter.exactOutputSingle(params);
        if (_amountIn < _amountInMaximum) {
            TransferHelper.safeApprove(weth9, address(swapRouter), 0);
            TransferHelper.safeTransfer(
                weth9,
                msg.sender,
                _amountInMaximum - _amountIn
            );
        }
    }
}
