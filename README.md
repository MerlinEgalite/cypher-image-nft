# Cypher Poems

## Deploy a contract on a network

```
npx hardhat run --network rinkeby scripts/deploy.js
```

## Publish and verify a contract on Etherscan

An etherscn API key is required to verify the contract and placed into your `.env` local file.
The right arguments of the constructor of the smart contract to verify must be write inside `arguments.js`. Then you can run the following command to verify a contract:

```
npx hardhat verify --network rinkeby --constructor-args scripts/arguments.js <contract-address>
```
