const call = require('./call.js');
const mysql = require('mysql');
const moment = require('moment');
const time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

call.callApi().then(function(res) {
  con.connect(function(err) {
    if (err) throw err;

      var btcUsdt = res[0][11]["price"];

      var ethBtc = res[0][0]["price"];
      var ethUsdt = res[0][12]["price"];

      var xrpBtc = res[0][86]["price"];
      var xrpUsdt = res[0][293]["price"];

      var bnbBtc = res[0][2]["price"];
      var bnbUsdt = res[0][94]["price"];

      var iotaBtc = res[0][40]["price"];
      var iotaUsdt = res[0][316]["price"];

      var vetBtc = res[0][358]["price"];
      var vetUsdt = res[0][360]["price"];

      var bccBtc = res[0][8]["price"];
      var bccUsdt = res[0][118]["price"];

      var etcBtc = res[0][57]["price"];
      var etcUsdt = res[0][334]["price"];

      var eosBtc = res[0][54]["price"];
      var eosUsdt = res[0][306]["price"];

      var ltcBtc = res[0][1]["price"];
      var ltcUsdt = res[0][183]["price"];

      var adaBtc = res[0][164]["price"];
      var adaUsdt = res[0][283]["price"];

      var ontBtc = res[0][259]["price"];
      var ontUsdt = res[0][331]["price"];

      var neoBtc = res[0][3]["price"];
      var neoUsdt = res[0][134]["price"];

      var xlmBtc = res[0][171]["price"];
      var xlmUsdt = res[0][317]["price"];

      var trxBtc = res[0][79]["price"];
      var trxUsdt = res[0][333]["price"];

      var adjPriceEth = (1 / ethBtc) * ethUsdt;
      var arbEth = (((adjPriceEth - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceXrp = (1 / xrpBtc) * xrpUsdt;
      var arbXrp = (((adjPriceXrp - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceBnb = (1 / bnbBtc) * bnbUsdt;
      var arbBnb = (((adjPriceBnb - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceIota = (1 / iotaBtc) * iotaUsdt;
      var arbIota = (((adjPriceIota - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceVet = (1 / vetBtc) * vetUsdt;
      var arbVet = (((adjPriceVet - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceBcc = (1 / bccBtc) * bccUsdt;
      var arbBcc = (((adjPriceBcc - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceEtc = (1 / etcBtc) * etcUsdt;
      var arbEtc = (((adjPriceEtc - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceEos = (1 / eosBtc) * eosUsdt;
      var arbEos = (((adjPriceEos - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceLtc = (1 / ltcBtc) * ltcUsdt;
      var arbLtc = (((adjPriceLtc - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceAda = (1 / adaBtc) * adaUsdt;
      var arbAda = (((adjPriceAda - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceOnt = (1 / ontBtc) * ontUsdt;
      var arbOnt = (((adjPriceOnt - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceNeo = (1 / neoBtc) * neoUsdt;
      var arbNeo = (((adjPriceNeo - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceXlm = (1 / xlmBtc) * xlmUsdt;
      var arbXlm = (((adjPriceXlm - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceTrx = (1 / trxBtc) * trxUsdt;
      var arbTrx = (((adjPriceTrx - btcUsdt) / btcUsdt) * 100).toFixed(3);


      var sql = `INSERT INTO arbs (ethArb, xrpArb, timestamp, bnbArb, ontArb,
                 iotaArb, vetArb, bccArb, etcArb, eosArb, ltcArb, adaArb,
                 xlmArb, neoArb, trxArb)
                 VALUES ('${arbEth}', '${arbXrp}', '${time}', '${arbBnb}',
                 '${arbOnt}', '${arbIota}', '${arbVet}', '${arbBcc}', '${arbEtc}',
                 '${arbEos}', '${arbLtc}', '${arbAda}', '${arbXlm}', '${arbNeo}',
                 '${arbTrx}')`;


      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(time + ": Values have successfully been inserted into database arbs table.");
      });

    con.end(function(err) {
      if (err) { return console.log('error:' + err.message); }
      console.log('Database connection has successfully closed.');
    });
  });
}).catch(function(err) {
  console.log(err);
});


var con = mysql.createConnection({
  host: "localhost",
  user: "nicolas",
  password: "21npineave",
  database: "arbWithin"
});
