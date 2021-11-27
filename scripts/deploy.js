const hre = require('hardhat');

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // URI to set
  const URI = 'QmQsuCAsKurHQiCykQ4TXNPv1whc9Cdc4swEv72y7mTJRw';
  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());

  const CypherPoem = await hre.ethers.getContractFactory('CypherPoem');
  const cypherPoem = await CypherPoem.deploy(URI);
  await cypherPoem.deployed();

  console.log('CypherPoem address:', cypherPoem.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
