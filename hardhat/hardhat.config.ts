import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""]
    },
    mainnet: {
      url: process.env.MAINNET_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || ""
  }
};

export default config;