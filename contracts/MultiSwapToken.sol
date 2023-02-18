// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
pragma abicoder v2;

// Imports
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SwapMultiHop {
    ISwapRouter public constant swapRouter =
        ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);

    address public constant dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant weth9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant usdc = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    function swapExactInputMultiHop(
        uint _amountIn
    ) external returns (uint _amountOut) {
        TransferHelper.safeTransferFrom(
            weth9,
            msg.sender,
            address(this),
            _amountIn
        );
        TransferHelper.safeApprove(weth9, address(swapRouter), _amountIn);

        ISwapRouter.ExactInputParams memory params = ISwapRouter
            .ExactInputParams({
                path: abi.encodePacked(
                    weth9,
                    uint24(3000),
                    usdc,
                    uint24(100),
                    dai
                ),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: _amountIn,
                amountOutMinimum: 0
            });
        _amountOut = swapRouter.exactInput(params);
    }
}
