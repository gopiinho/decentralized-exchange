# Decentralized Exchange

Decentralized exchange based on Uniswap AMM model.

## Learning Takeaways

#### Contract - SwapToken.sol

1. TransferHelper is a smart contract in Solidity, specifically developed for the Uniswap decentralized exchange platform. It is designed to simplify the process of transferring tokens from one address to another, without the need for users to manually manage the complex interactions between different smart contracts.

2. Uniswap's iSwapRouter is a smart contract that acts as a hub for exchanging tokens on the Uniswap platform. It makes it easy for users to trade tokens by automatically finding the best pool of liquidity and handling the trade for them. The iSwapRouter also collects fees from trades and gives them to the people who provide the liquidity for the platform. This helps to ensure that there is always enough liquidity for trading and encourages people to participate in the platform.

#### Contract - MultiSwapToken.sol

1. The Uniswap multihop contract is a smart contract that enables users to trade between any two tokens listed on Uniswap, even if there isn't a direct trading pair between them. This is achieved by automatically routing the trade through one or more intermediate tokens, creating a chain of trades that effectively enables the user to trade between the two desired tokens.

2. The multihop contract is designed to optimize the trade path and minimize the trading fees incurred by the user. It uses an algorithm to find the most efficient path between the two tokens, taking into account the current market prices and trading fees for each token. This helps to ensure that users get the best possible price for their trade, even if they are trading between tokens that don't have a direct trading pair.
