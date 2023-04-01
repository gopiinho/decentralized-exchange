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
import ERC20 from "./ERC20.json"

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
    "0x9e7F7d0E8b8F38e3CF2b3F7dd362ba2e9E82baa4", // Token 1
    "0x0724F18B2aA7D6413D3fDcF6c0c27458a8170Dd9", // Token 2
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

      // *** Checking ETH balance ***
      const balance = await provider.getBalance(userAccount)

      // Converting the BigNumber to more readable format
      const convertedBalance = BigNumber.from(balance).toString()

      // Converting the string to proper eth value using ethers utils
      const ethValue = ethers.utils.formatEther(convertedBalance)
      setEther(ethValue)

      // *** Getting All token balance ***
      addToken.map(async (el, i) => {
        // Getting contract instances
        const contract = new ethers.Contract(el, ERC20, provider)
        // Getting the balances for the tokens
        const userBalance = await contract.balanceOf(userAccount)

        // Getting Token 1 balance
        const tokens = BigNumber.from(userBalance).toString()
        const tokensBalance = ethers.utils.formatEther(tokens)

        console.log(`Token  balance ${tokensBalance} `)

        // Getting tokens name and symbol
        const name = await contract.name()
        const symbol = await contract.symbol()

        tokenData.push({
          name: name,
          symbol: symbol,
          balance: tokensBalance,
        })

        console.log(tokenData)
      })
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
