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
  DAIAddress,
} from "../context/Constants"

// ---------------------- Wallet Functions ------------------------

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

// ---------------------- Contract Functions ------------------------

// Fetching Token1
export const fetchToken1Contract = (signerOrProvider) =>
  new ethers.Contract(TokenOneAddress, TokenOneABI, signerOrProvider)

// Fetching Token2
export const fetchToken2Contract = (signerOrProvider) =>
  new ethers.Contract(TokenTwoAddress, TokenTwoABI, signerOrProvider)

// Fetching SingleSwap Contract
export const fetchSingleSwapContract = (signerOrProvider) =>
  new ethers.Contract(
    SingleSwapTokenAddress,
    SingleSwapTokenABI,
    signerOrProvider
  )

// Fetching MultiHop Contract
export const fetchMultiHopContract = (signerOrProvider) =>
  new ethers.Contract(SwapMultiHopAddress, SwapMultiHopABI, signerOrProvider)

// Fetching IWETH Contract
export const fetchIWETHContract = (signerOrProvider) =>
  new ethers.Contract(IWETHAddress, IWETHABI, signerOrProvider)

// Fetching IWETH Contract
export const fetchDAIContract = (signerOrProvider) =>
  new ethers.Contract(DAIAddress, IWETHABI, signerOrProvider)

// ------------- Making contract connections ------------

// Connecting to Token1
export const connectToken1 = async () => {
  try {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchToken1Contract(signer)
    return contract
  } catch (error) {
    console.log(error)
  }
}

// Connecting to Token1
export const connectToken2 = async () => {
  try {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchToken2Contract(signer)
    return contract
  } catch (error) {
    console.log(error)
  }
}

// Connecting to SingleSwap Contract
export const SingleSwapToken = async () => {
  try {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchSingleSwapContract(signer)
    return contract
  } catch (error) {
    console.log(error)
  }
}

// Connecting to MultiHop Contract
export const connectSwapMultiHop = async () => {
  try {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchMultiHopContract(signer)
    return contract
  } catch (error) {
    console.log(error)
  }
}

// Connecting to IWETH Contract
export const connectIWETH = async () => {
  try {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchIWETHContract(signer)
    return contract
  } catch (error) {
    console.log(error)
  }
}

// Connecting to DAI Contract
export const connectDAI = async () => {
  try {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchDAIContract(signer)
    return contract
  } catch (error) {
    console.log(error)
  }
}
