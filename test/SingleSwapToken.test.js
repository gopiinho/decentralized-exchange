const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

// Assigning addresses of the coins we are about to use

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
const BUSD = "0x4Fabb145d64652a948d72533023f6E7A623C7C53"
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

describe("SingleSwapToken", () => {
  let singleSwapToken
  let accounts
  let usdc
  let busd
  let weth

  before(async () => {
    accounts = await ethers.getSigners(1)
    const swaptoken = await ethers.getContractFactory("SingleSwapToken")
    singleSwapToken = await swaptoken.deploy()

    await singleSwapToken.deployed()

    weth = await ethers.getContractAt("IWETH", USDC)
    weth = await ethers.getContractAt("IERC20", BUSD)
    weth = await ethers.getContractAt("IERC20", WETH9)

    console.log(usdc)
    console.log(busd)
    console.log(weth)
    console.log(accounts)
    console.log(singleSwapToken)
  })
})
