const hre = require("hardhat")
const { ethers } = require("hardhat")

async function main() {
  // SingleSwap Deploy
  const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken")
  const singleswaptoken = await SingleSwapToken.deploy()
  await singleswaptoken.deployed()

  console.log(`SingleSwap contract deployed to ${singleswaptoken.address}`)
  console.log("----------------------------")

  // MultiHop Deploy
  const SwapMultiHop = await hre.ethers.getContractFactory("TokenOne")
  const swapmultihop = await SwapMultiHop.deploy()
  await swapmultihop.deployed()

  console.log(`MultiHop contract deployed to ${swapmultihop.address}`)
  console.log("----------------------------")

  // Token1 Deply
  const Contract1 = await hre.ethers.getContractFactory("TokenOne")
  const contract1 = await Contract1.deploy()
  await contract1.deployed()

  console.log(`Token1 contract deployed to ${contract1.address}`)

  const totalSupply1 = await contract1.totalSupply()
  console.log(`Total supply: ${ethers.utils.formatUnits(totalSupply1)}`)

  console.log("----------------------------")

  // Token1 Deply
  const Contract2 = await hre.ethers.getContractFactory("TokenTwo")
  const contract2 = await Contract2.deploy()
  await contract2.deployed()

  console.log(`Token2 contract deployed to ${contract2.address}`)

  const totalSupply2 = await contract2.totalSupply()
  console.log(`Total supply: ${ethers.utils.formatUnits(totalSupply2)}`)
  console.log("----------------------------")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
