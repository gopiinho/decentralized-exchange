import React, { useState, useEffect } from "react"
import { ethers, BigNumber } from "ethers"
import Web3Modal from "web3modal"

import {
  connectWallet,
  connectToken1,
  connectToken2,
  SingleSwapToken,
  connectSwapMultiHop,
  connectIWETH,
  connectDAI,
} from "../utils/appFeatures"

import { IWETHABI } from "./Constants"

export const SwapTokenContext = React.createContext()

export const SwapTokenContextProvider = ({ children }) => {
  return <SwapTokenContext.Provider>{children}</SwapTokenContext.Provider>
}
