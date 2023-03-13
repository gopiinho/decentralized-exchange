// Importing contract json's from deployed contracts

import singleSwap from "./SingleSwapToken.json"
import multiHop from "./SwapMultiHop.json"
import token1 from "./TokenOne.json"
import token2 from "./TokenTwo.json"
import iweth from "./IWETH.json"

// SingleSwapToken
export const SingleSwapTokenAddress =
  "0x47c05BCCA7d57c87083EB4e586007530eE4539e9"
export const SingleSwapTokenABI = singleSwap.abi

// SwapMultiHop
export const SwapMultiHopAddress = "0x408F924BAEC71cC3968614Cb2c58E155A35e6890"
export const SwapMultiHopABI = multiHop.abi

// TokenOne
export const TokenOneAddress = "0x773330693cb7d5D233348E25809770A32483A940"
export const TokenOneABI = token1.abi

// TokenTwo
export const TokenTwoAddress = "0x52173b6ac069619c206b9A0e75609fC92860AB2A"
export const TokenTwoABI = token2.abi

// IWETH
export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
export const IWETHABI = iweth.abi

// DAI
export const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
