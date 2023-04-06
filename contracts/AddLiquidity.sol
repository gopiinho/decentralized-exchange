// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
pragma abicoder v2;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/base/LiquidityManagement.sol";
import "hardhat/console.sol";

// **** Contract is an example to understand how liquidity is created for token pair ****

contract AddLiquidity is IERC721Receiver {
    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    // Fee the user will get for providing liquidity.
    uint24 public constant poolFee = 100;

    INonfungiblePositionManager public nonfungiblePositionManager =
        // Following hard coded address is a bad practise but will update this later. (Hardhat node wallet)
        INonfungiblePositionManager(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);

    /// @notice Represents the deposit of an NFT
    struct Deposit {
        address owner;
        uint128 liquidity;
        address token0;
        address token1;
    }

    // Mapping to keep track of liquidity deposits
    mapping(uint => Deposit) deposits;

    // TokenID variable
    uint public tokenId;
}
