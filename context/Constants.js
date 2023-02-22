// Importing contract json's from deployed contracts

import singleSwap from "./SingleSwapToken.json"
import multiHop from "./SwapMultiHop.json"
import token1 from "./TokenOne.json"
import token2 from "./TokenTwo.json"
import iweth from "./IWETH.json"

// SingleSwapToken
export const SingleSwapTokenAddress =
  "0x73C68f1f41e4890D06Ba3e71b9E9DfA555f1fb46"
export const SingleSwapTokenABI = singleSwap.abi

// SwapMultiHop
export const SwapMultiHopAddress = "0xD2D5e508C82EFc205cAFA4Ad969a4395Babce026"
export const SwapMultiHopABI = multiHop.abi

// TokenOne
export const TokenOneAddress = "0x2b639Cc84e1Ad3aA92D4Ee7d2755A6ABEf300D72"
export const TokenOneABI = token1.abi

// TokenTwo
export const TokenTwoAddress = "0xF85895D097B2C25946BB95C4d11E2F3c035F8f0C"
export const TokenTwoABI = token2.abi

// IWETH
export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
export const IWETHABI = iweth.abi
