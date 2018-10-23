const async = require('async');
const request = require('request');
const promise = require('promise');

function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}

const urls= [
  "https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT",
  "https://api.binance.com/api/v1/ticker/price?symbol=ETHBTC",
  "https://api.binance.com/api/v1/ticker/price?symbol=ETHUSDT",
  "https://api.binance.com/api/v1/ticker/price?symbol=XRPBTC",
  "https://api.binance.com/api/v1/ticker/price?symbol=XRPUSDT"
];

const urls1 = [
  "https://api.binance.com/api/v1/ticker/price"
];

function callApi() {
  return new Promise(function(resolve, reject) {
    async.map(urls1, httpGet, function (err, res){
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  })

}
module.exports.callApi = callApi;
