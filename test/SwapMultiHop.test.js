const { expect } = require("chai")
const { ethers } = require("hardhat")

// Assigning addresses of the coins we are about to use

const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

describe("SwapMultiHop contract", () => {
  let swapMultiHop
  let accounts
  let usdc
  let dai
  let weth

  before(async () => {
    accounts = await ethers.getSigners(1)

    const swapmultitoken = await ethers.getContractFactory("SwapMultiHop")
    swapMultiHop = await swapmultitoken.deploy()
    await swapMultiHop.deployed()

    console.log(`Contract deployed to : ${swapMultiHop.address}`)

    weth = await ethers.getContractAt("IWETH", WETH9)
    dai = await ethers.getContractAt("IERC20", DAI)
    usdc = await ethers.getContractAt("IERC20", USDC)
  })

  it("Tests the swapExactInputMultiHop function", async () => {
    const amountIn = 10n ** 18n

    // Deposit WETH from created Interface
    await weth.deposit({ value: amountIn })
    await weth.approve(swapMultiHop.address, amountIn)

    // Perform the swap
    await swapMultiHop.swapExactInputMultiHop(amountIn)
    console.log("DAI balance", await dai.balanceOf(accounts[0].address))
  })
})
