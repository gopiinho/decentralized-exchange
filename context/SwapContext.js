import React, { useState, useEffect } from "react"
import { ethers, BigNumber } from "ethers"
import Web3Modal from "web3modal"

import {
  isWalletConnected,
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

  const addToken = [
    "0x2b639Cc84e1Ad3aA92D4Ee7d2755A6ABEf300D72",
    "0xF85895D097B2C25946BB95C4d11E2F3c035F8f0C",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  ]

  // Fetching user token data

  const fetchData = async () => {
    try {
      const userAccount = await isWalletConnected()

      // Setting setAccount to userAccount
      setAccount(userAccount)

      // Creating provider

      const web3modal = new Web3Modal()
      const connection = await web3modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)

      // Checking balance
      const balance = await provider.getBalance(userAccount)

      // Converting the BigNumber to more readable format
      const convertedBalance = BigNumber.from(balance).toString()

      // Converting the string to proper eth value using ethers utils
      const ethValue = ethers.utils.formatEther(convertedBalance)
      setEther(ethValue)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <SwapTokenContext.Provider value={{}}>{children}</SwapTokenContext.Provider>
  )
}
