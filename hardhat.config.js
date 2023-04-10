require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.4.0",
      },
      {
        version: "0.5.0",
      },
      {
        version: "0.7.6",
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: MAINNET_RPC_URL,
      },
    },
  },
}
