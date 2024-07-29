require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

//  provider = hre.ethers.getDefaultProvider();
  provider = hre.ethers.provider;

  let balance;
  let nonce;
  for (const account of accounts) {
    balance = hre.ethers.utils.formatEther(await provider.getBalance(account.address));
    nonce   = await provider.getTransactionCount(account.address);
    console.log("account=[%s], balance=[%d], nonce=[%d]", account.address, balance, nonce);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'sepolia',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY1],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY1],
    },
    amoy: {
      url: `https://rpc-amoy.polygon.technology`,
      accounts: [process.env.PRIVATE_KEY1],
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY1],
    },
    baobap: {
      url: process.env.BAOBAP_URL,
      accounts: [process.env.PRIVATE_KEY1],
    },
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
    },
  },
  solidity: "0.8.18",
};
