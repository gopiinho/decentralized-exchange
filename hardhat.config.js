require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: MAINNET_RPC_URL,
      },
    },
  },
}
