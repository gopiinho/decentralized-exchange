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
  // States - Wallet and Networks
  const [account, setAccount] = useState("")
  const [ether, setEther] = useState("")
  const [connectedNetwork, setConnectedNetwork] = useState("")

  // States - Token
  const [weth, setWeth9] = useState("")
  const [dai, setDai] = useState("")

  const [tokenData, setTokenData] = useState([])

  const addToken = []
  return (
    <SwapTokenContext.Provider value={{}}>{children}</SwapTokenContext.Provider>
  )
}
