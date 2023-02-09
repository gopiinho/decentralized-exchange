const hre = require("hardhat")

async function main() {
  const Contract = await hre.ethers.getContractFactory("")
  const contract = await Contract.deploy()

  await lock.deployed()

  console.log(`Deployed to ${Contract.address}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
