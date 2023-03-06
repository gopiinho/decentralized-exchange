// Importing contract json's from deployed contracts

import singleSwap from "./SingleSwapToken.json"
import multiHop from "./SwapMultiHop.json"
import token1 from "./TokenOne.json"
import token2 from "./TokenTwo.json"
import iweth from "./IWETH.json"

// SingleSwapToken
export const SingleSwapTokenAddress =
  "0x0b27a79cb9C0B38eE06Ca3d94DAA68e0Ed17F953"
export const SingleSwapTokenABI = singleSwap.abi

// SwapMultiHop
export const SwapMultiHopAddress = "0x7bdd3b028C4796eF0EAf07d11394d0d9d8c24139"
export const SwapMultiHopABI = multiHop.abi

// TokenOne
export const TokenOneAddress = "0xB468647B04bF657C9ee2de65252037d781eABafD"
export const TokenOneABI = token1.abi

// TokenTwo
export const TokenTwoAddress = "0x47c05BCCA7d57c87083EB4e586007530eE4539e9"
export const TokenTwoABI = token2.abi

// IWETH
export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
export const IWETHABI = iweth.abi

// DAI
export const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
