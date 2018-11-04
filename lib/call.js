const async = require('async');
const request = require('request');
const promise = require('promise');

function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options, function(err, res, body) {
      callback(err, body);
    }
  );
}

const urls= [
  "https://api.binance.com/api/v1/depth?symbol=BTCUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=ADABTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=ADAUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=BCCBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=BCCUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=BNBBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=BNBUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=EOSBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=EOSUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=ETCBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=ETCUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=ETHBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=ETHUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=ICXBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=ICXUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=IOTABTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=IOTAUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=LTCBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=LTCUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=NEOBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=NEOUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=ONTBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=ONTUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=TRXBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=TRXUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=TUSDBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=TUSDUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=VETBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=VETUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=XLMBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=XLMUSDT&limit=10",

  "https://api.binance.com/api/v1/depth?symbol=XRPBTC&limit=10",
  "https://api.binance.com/api/v1/depth?symbol=XRPUSDT&limit=10"
];

const urls1 = [
  "https://api.binance.com/api/v1/ticker/price"
];

function callApi() {
  return new Promise(function(resolve, reject) {
    async.map(urls, httpGet, function (err, res){
      if (err) {
        reject(err);
      } else {
        // console.log(res[12].asks);
        resolve(res);
      }
    });
  });
}
// callApi();
module.exports.callApi = callApi;
