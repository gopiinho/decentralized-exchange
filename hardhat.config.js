require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: [RINKEBY_RPC_URL],
      },
    },
  },
}
