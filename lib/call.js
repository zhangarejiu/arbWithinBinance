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
  "https://api.binance.com/api/v1/depth?symbol=BTCUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=ADABTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=ADAUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=BCCBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=BCCUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=BNBBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=BNBUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=EOSBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=EOSUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=ETCBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=ETCUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=ETHBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=ETHUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=ICXBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=ICXUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=IOTABTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=IOTAUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=LTCBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=LTCUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=NEOBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=NEOUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=ONTBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=ONTUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=TRXBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=TRXUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=TUSDBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=TUSDUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=VETBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=VETUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=XLMBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=XLMUSDT&limit=20",

  "https://api.binance.com/api/v1/depth?symbol=XRPBTC&limit=20",
  "https://api.binance.com/api/v1/depth?symbol=XRPUSDT&limit=20"
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
