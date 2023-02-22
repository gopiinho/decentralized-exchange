const hre = require("hardhat")
const { ethers } = require("hardhat")

async function main() {
  const Contract = await hre.ethers.getContractFactory("TokenOne")
  const contract = await Contract.deploy()

  await contract.deployed()

  console.log(`Deployed to ${contract.address}`)
  console.log("----------------------------")

  const totalSupply = await contract.totalSupply()
  console.log(`Total supply: ${ethers.utils.formatUnits(totalSupply)}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
