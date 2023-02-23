import { ethers } from "ethers"
import Web3Modal from "web3modal"

import {
  SingleSwapTokenAddress,
  SingleSwapTokenABI,
  SwapMultiHopAddress,
  SwapMultiHopABI,
  TokenOneAddress,
  TokenOneABI,
  TokenTwoAddress,
  TokenTwoABI,
  IWETHAddress,
  IWETHABI,
} from "../context/Constants"

// Check if wallet is connected
export const isWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask")
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    })
    const firstAccount = accounts[0]
    return firstAccount
  } catch (error) {
    console.log(error)
  }
}

// Connect Wallet
export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask")
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    const firstAccount = accounts[0]
    return firstAccount
  } catch (error) {
    console.log(error)
  }
}
