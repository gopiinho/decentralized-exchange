const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

// Assigning addresses of the coins we are about to use

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

describe("SingleSwapToken", () => {
  let singleSwapToken
  let accounts
  let usdc
  let dai
  let weth

  before(async () => {
    accounts = await ethers.getSigners(1)
    const swaptoken = await ethers.getContractFactory("SingleSwapToken")
    singleSwapToken = await swaptoken.deploy()

    await singleSwapToken.deployed()

    usdc = await ethers.getContractAt("IERC20", USDC)
    dai = await ethers.getContractAt("IERC20", DAI)
    weth = await ethers.getContractAt("IWETH", WETH9)
  })

  it("Tests the swapExactInputString function", async () => {
    const amountIn = 10n ** 18n

    // Deposit WETH from created Interface
    await weth.deposit({ value: amountIn })
    await weth.approve(singleSwapToken.address, amountIn)

    // Perform the swap
    await singleSwapToken.swapExactInputString(amountIn)

    console.log("DAI balance", await dai.balanceoOf(accounts[0].address))
  })
})
