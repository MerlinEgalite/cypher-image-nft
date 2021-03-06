require('dotenv').config({ path: './.env.local' });
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');

module.exports = {
  networks: {
    hardhat: {},
    rinkeby: {
      accounts: ['0xae756dcb08a84a119e4910d1ba4dfeb180b0ec5ec4a25223fae2669f36559dd1'],
      // privateKey: "0x574028dad40752ed4448624f35ecb32821b0b0791652a34c10aa78053a08a730",
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    },
  },
  solidity: {
    version: '0.8.7',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
