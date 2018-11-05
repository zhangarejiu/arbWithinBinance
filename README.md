# arbWithinBinance
 This repo is a work-in-progress cryptocurrency trading bot project that exlpoits triangular arbitrage opportunities found in cryptocurrency exchanges, namely Binance.
 
 ## Current Status of the Project
 Currently, the program is collecting data and inserting into a database. The data itself is the arbitrage percentage rate of specific triangular arbitrage opportunities. By collecting this data, we will be able to see the prevalence of said triangular arbitrage opportunities. 
 
 ## Goal of the Project
 The goal of the project would be to fully develop a live trading bot that analyzes triangular arbitrage opportunities and if certain conditions are met (when certain opportunities are profitable while taking into consideration trading fees, trading balances, orderbook statuses, and etc.) execute trades utilizing binances extensive private-api services. 
 
 ## What is triangular arbitrage?
 Triangular arbitrage is a method of increasing your quoted cryptocurrency/fiat by making a series of trades using related crypto trading pairs. BTC/USD would be a trading pair where we can buy and sell BTC with and for USD. This method exists because not only can you buy cryptocurrency with fiat, you can also by cryptocurrency with other cryptocurrency. ETH/BTC would be a trading pair where we can buy and sell ETH with and for BTC. These trading pairs, made up of two cryptocurrencies, make triangular arbitrage possible. In this example, we would be interested in three markets: BTC/USD, ETH/USD, and ETH/BTC. If we turn to the math, buying ETH for USD and then selling ETH for BTC should be equal to just buying BTC for USD ( (ETH/USD) * (1 / (ETH/BTC)) = BTC/USD ). Because these markets are dominated by supply and demand, discrepancies exist and these discrepancies can be exploited with a quick series of three trades in these three markets. 
 
## Definitions of the files
The newMain.js file is the primary code being called to collect and insert the data. The lib directory includes two classes used to call the binance api for market data and calculate the weighted price average of the trading pairs based on an initial balance. Ignore main.js. 
