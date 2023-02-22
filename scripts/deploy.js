const hre = require("hardhat")
const { ethers } = require("hardhat")

async function main() {
  // Token1 Deply
  const Contract1 = await hre.ethers.getContractFactory("TokenOne")
  const contract1 = await Contract1.deploy()

  await contract1.deployed()

  console.log(`Deployed to ${contract1.address}`)
  console.log("----------------------------")

  const totalSupply1 = await contract1.totalSupply()
  console.log(`Total supply: ${ethers.utils.formatUnits(totalSupply1)}`)

  // Token1 Deply
  const Contract2 = await hre.ethers.getContractFactory("TokenTwo")
  const contract2 = await Contract2.deploy()

  await contract2.deployed()

  console.log(`Deployed to ${contract2.address}`)
  console.log("----------------------------")

  const totalSupply2 = await contract2.totalSupply()
  console.log(`Total supply: ${ethers.utils.formatUnits(totalSupply2)}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
