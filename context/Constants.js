// Importing contract json's from deployed contracts

import singleSwap from "./SingleSwapToken.json"
import multiHop from "./SwapMultiHop.json"
import token1 from "./TokenOne.json"
import token2 from "./TokenTwo.json"
import iweth from "./IWETH.json"

// SingleSwapToken
export const SingleSwapTokenAddress =
  "0x5c932424AcBfab036969b3B9D94bA9eCbae7565D"
export const SingleSwapTokenABI = singleSwap.abi

// SwapMultiHop
export const SwapMultiHopAddress = "0x3949c97925e5Aa13e34ddb18EAbf0B70ABB0C7d4"
export const SwapMultiHopABI = multiHop.abi

// TokenOne
export const TokenOneAddress = "0x9e7F7d0E8b8F38e3CF2b3F7dd362ba2e9E82baa4"
export const TokenOneABI = token1.abi

// TokenTwo
export const TokenTwoAddress = "0x0724F18B2aA7D6413D3fDcF6c0c27458a8170Dd9"
export const TokenTwoABI = token2.abi

// IWETH
export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
export const IWETHABI = iweth.abi

// DAI
export const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
