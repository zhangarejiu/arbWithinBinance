const call = require('./lib/call');
const wp = require('./lib/weightedPrice');
const mysql = require('mysql');
const moment = require('moment');
const time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

var con = mysql.createConnection({
  host: "localhost",
  user: "nicolas",
  password: "",
  database: "arbWithin"
});

var balance = 1000;

call.callApi().then(function(res) {
  con.connect(function(err) {
    if (err) throw err;

        //*****************************************************************//
                                    // ASKS //
        //*****************************************************************//

        var btcUsdtAsks = new wp(res[0].asks, balance).weightedUsdtPrice;

        var adaUsdtAsks = new wp(res[2].asks, balance).weightedUsdtPrice;
        var adaBtcAsks = new wp(res[1].asks, balance / adaUsdtAsks).weightedBtcPrice;

        var bccUsdtAsks = new wp(res[4].asks, balance).weightedUsdtPrice;
        var bccBtcAsks = new wp(res[3].asks, balance / bccUsdtAsks).weightedBtcPrice;

        var bnbUsdtAsks = new wp(res[6].asks, balance).weightedUsdtPrice;
        var bnbBtcAsks = new wp(res[5].asks, (balance / bnbUsdtAsks)).weightedBtcPrice;

        var eosUsdtAsks = new wp(res[8].asks, balance).weightedUsdtPrice;
        var eosBtcAsks = new wp(res[7].asks, balance / eosUsdtAsks).weightedBtcPrice;

        var etcUsdtAsks = new wp(res[10].asks, balance).weightedUsdtPrice;
        var etcBtcAsks = new wp(res[9].asks, balance / etcUsdtAsks).weightedBtcPrice;

        var ethUsdtAsks = new wp(res[12].asks, balance).weightedUsdtPrice;
        var ethBtcAsks = new wp(res[11].asks, balance / ethUsdtAsks).weightedBtcPrice;

        var icxUsdtAsks = new wp(res[14].asks, balance).weightedUsdtPrice;
        var icxBtcAsks = new wp(res[13].asks, balance / icxUsdtAsks).weightedBtcPrice;

        var iotaUsdtAsks = new wp(res[16].asks, balance).weightedUsdtPrice;
        var iotaBtcAsks = new wp(res[15].asks, balance / iotaUsdtAsks).weightedBtcPrice;

        var ltcUsdtAsks = new wp(res[18].asks, balance).weightedUsdtPrice;
        var ltcBtcAsks = new wp(res[17].asks, balance / ltcUsdtAsks).weightedBtcPrice;

        var neoUsdtAsks = new wp(res[20].asks, balance).weightedUsdtPrice;
        var neoBtcAsks = new wp(res[19].asks, balance / neoUsdtAsks).weightedBtcPrice;

        var ontUsdtAsks = new wp(res[22].asks, balance).weightedUsdtPrice;
        var ontBtcAsks = new wp(res[21].asks, balance / ontUsdtAsks).weightedBtcPrice;

        var trxUsdtAsks = new wp(res[24].asks, balance).weightedUsdtPrice;
        var trxBtcAsks = new wp(res[23].asks, balance / trxUsdtAsks).weightedBtcPrice;

        var tusdUsdtAsks = new wp(res[26].asks, balance).weightedUsdtPrice;
        var tusdBtcAsks = new wp(res[25].asks, balance / tusdUsdtAsks).weightedBtcPrice;

        var vetUsdtAsks = new wp(res[28].asks, balance).weightedUsdtPrice;
        var vetBtcAsks = new wp(res[27].asks, balance / vetUsdtAsks).weightedBtcPrice;

        var xlmUsdtAsks = new wp(res[30].asks, balance).weightedUsdtPrice;
        var xlmBtcAsks = new wp(res[29].asks, balance / xlmUsdtAsks).weightedBtcPrice;

        var xrpUsdtAsks = new wp(res[32].asks, balance).weightedUsdtPrice;
        var xrpBtcAsks = new wp(res[31].asks, balance / xrpUsdtAsks).weightedBtcPrice;

        //*****************************************************************//
                                    // BIDS //
        //*****************************************************************//

        var btcUsdtBids = new wp(res[0].bids, balance).weightedUsdtPrice;

        var adaUsdtBids = new wp(res[2].bids, balance).weightedUsdtPrice;
        var adaBtcBids = new wp(res[1].bids, balance / adaUsdtBids).weightedBtcPrice;

        var bccUsdtBids = new wp(res[4].bids, balance).weightedUsdtPrice;
        var bccBtcBids = new wp(res[3].bids, balance / bccUsdtBids).weightedBtcPrice;

        var bnbUsdtBids = new wp(res[6].bids, balance).weightedUsdtPrice;
        var bnbBtcBids = new wp(res[5].bids, (balance / bnbUsdtBids)).weightedBtcPrice;

        var eosUsdtBids = new wp(res[8].bids, balance).weightedUsdtPrice;
        var eosBtcBids = new wp(res[7].bids, balance / eosUsdtBids).weightedBtcPrice;

        var etcUsdtBids = new wp(res[10].bids, balance).weightedUsdtPrice;
        var etcBtcBids = new wp(res[9].bids, balance / etcUsdtBids).weightedBtcPrice;

        var ethUsdtBids = new wp(res[12].bids, balance).weightedUsdtPrice;
        var ethBtcBids = new wp(res[11].bids, balance / ethUsdtBids).weightedBtcPrice;

        var icxUsdtBids = new wp(res[14].bids, balance).weightedUsdtPrice;
        var icxBtcBids = new wp(res[13].bids, balance / icxUsdtBids).weightedBtcPrice;

        var iotaUsdtBids = new wp(res[16].bids, balance).weightedUsdtPrice;
        var iotaBtcBids = new wp(res[15].bids, balance / iotaUsdtBids).weightedBtcPrice;

        var ltcUsdtBids = new wp(res[18].bids, balance).weightedUsdtPrice;
        var ltcBtcBids = new wp(res[17].bids, balance / ltcUsdtBids).weightedBtcPrice;

        var neoUsdtBids = new wp(res[20].bids, balance).weightedUsdtPrice;
        var neoBtcBids = new wp(res[19].bids, balance / neoUsdtBids).weightedBtcPrice;

        var ontUsdtBids = new wp(res[22].bids, balance).weightedUsdtPrice;
        var ontBtcBids = new wp(res[21].bids, balance / ontUsdtBids).weightedBtcPrice;

        var trxUsdtBids = new wp(res[24].bids, balance).weightedUsdtPrice;
        var trxBtcBids = new wp(res[23].bids, balance / trxUsdtBids).weightedBtcPrice;

        var tusdUsdtBids = new wp(res[26].bids, balance).weightedUsdtPrice;
        var tusdBtcBids = new wp(res[25].bids, balance / tusdUsdtBids).weightedBtcPrice;

        var vetUsdtBids = new wp(res[28].bids, balance).weightedUsdtPrice;
        var vetBtcBids = new wp(res[27].bids, balance / vetUsdtBids).weightedBtcPrice;

        var xlmUsdtBids = new wp(res[30].bids, balance).weightedUsdtPrice;
        var xlmBtcBids = new wp(res[29].bids, balance / xlmUsdtBids).weightedBtcPrice;

        var xrpUsdtBids = new wp(res[32].bids, balance).weightedUsdtPrice;
        var xrpBtcBids = new wp(res[31].bids, balance / xrpUsdtBids).weightedBtcPrice;

    //*****************************************************************//
              // FORWARD ARB => 1. Buy ALTCOIN/USDT (.asks)
              //             2. Sell ALTCOIN/BTC (.bids)
              //             3. Sell BTC/USDT (.bids)
    //*****************************************************************//

        var adaF = (1 / adaBtcBids) * adaUsdtAsks;
        var adaArbF = (((adaF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var bccF = (1 / bccBtcBids) * bccUsdtAsks;
        var bccArbF = (((bccF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var bnbF = (1 / bnbBtcBids) * bnbUsdtAsks;
        var bnbArbF = (((bnbF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var eosF = (1 / eosBtcBids) * eosUsdtAsks;
        var eosArbF = (((eosF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var etcF = (1 / etcBtcBids) * etcUsdtAsks;
        var etcArbF = (((etcF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var ethF = (1 / ethBtcBids) * ethUsdtAsks;
        var ethArbF = (((ethF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var icxF = (1 / icxBtcBids) * icxUsdtAsks;
        var icxArbF = (((icxF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var iotaF = (1 / iotaBtcBids) * iotaUsdtAsks;
        var iotaArbF = (((iotaF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var ltcF = (1 / ltcBtcBids) * ltcUsdtAsks;
        var ltcArbF = (((ltcF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var neoF = (1 / neoBtcBids) * neoUsdtAsks;
        var neoArbF = (((neoF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var ontF = (1 / ontBtcBids) * ontUsdtAsks;
        var ontArbF = (((ontF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var trxF = (1 / trxBtcBids) * trxUsdtAsks;
        var trxArbF = (((trxF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var tusdF = (1 / tusdBtcBids) * tusdUsdtAsks;
        var tusdArbF = (((tusdF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var vetF = (1 / vetBtcBids) * vetUsdtAsks;
        var vetArbF = (((vetF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var xlmF = (1 / xlmBtcBids) * xlmUsdtAsks;
        var xlmArbF = (((xlmF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        var xrpF = (1 / xrpBtcBids) * xrpUsdtAsks;
        var xrpArbF = (((xrpF - btcUsdtBids) / btcUsdtBids) * 100).toFixed(3);

        //*****************************************************************//
                  // BACKWARD ARB => 1. BUY BTC/USDT (.asks)
                  //             2. BUY ALTCOIN/BTC (.asks)
                  //             3. Sell ALTCOIN/USDT (.bids)
        //*****************************************************************//

        var adaB = (1 / adaBtcAsks) * adaUsdtBids;
        var adaArbB = (((adaB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var bccB = (1 / bccBtcAsks) * bccUsdtBids;
        var bccArbB = (((bccB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var bnbB = (1 / bnbBtcAsks) * bnbUsdtBids;
        var bnbArbB = (((bnbB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var eosB = (1 / eosBtcAsks) * eosUsdtBids;
        var eosArbB = (((eosB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var etcB = (1 / etcBtcAsks) * etcUsdtBids;
        var etcArbB = (((etcB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var ethB = (1 / ethBtcAsks) * ethUsdtBids;
        var ethArbB = (((ethB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var icxB = (1 / icxBtcAsks) * icxUsdtBids;
        var icxArbB = (((icxB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var iotaB = (1 / iotaBtcAsks) * iotaUsdtBids;
        var iotaArbB = (((iotaB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var ltcB = (1 / ltcBtcAsks) * ltcUsdtBids;
        var ltcArbB = (((ltcB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var neoB = (1 / neoBtcAsks) * neoUsdtBids;
        var neoArbB = (((neoB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var ontB = (1 / ontBtcAsks) * ontUsdtBids;
        var ontArbB = (((ontB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var trxB = (1 / trxBtcAsks) * trxUsdtBids;
        var trxArbB = (((trxB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var tusdB = (1 / tusdBtcAsks) * tusdUsdtBids;
        var tusdArbB = (((tusdB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var vetB = (1 / vetBtcAsks) * vetUsdtBids;
        var vetArbB = (((vetB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var xlmB = (1 / xlmBtcAsks) * xlmUsdtBids;
        var xlmArbB = (((xlmB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);

        var xrpB = (1 / xrpBtcAsks) * xrpUsdtBids;
        var xrpArbB = (((xrpB - btcUsdtAsks) / btcUsdtAsks) * 100).toFixed(3);


        //*****************************************************************//
                                // SQL QUERIES //
        //*****************************************************************//

        var sqlF = `INSERT INTO forwardArb (ada, bcc, bnb, eos, etc, eth, icx, iota, ltc, neo, ont, trx, tusd, vet, xlm, xrp)
                    VALUES ('${adaArbF}', '${adaArbF}', '${bccArbF}', '${bnbArbF}', '${eosArbF}', '${etcArbF}', '${ethArbF}',
                    '${icxArbF}', '${iotaArbF}', '${ltcArbF}', '${neoArbF}', '${ontArbF}', '${trxArbF}', '${tusdArbF}',
                    '${xlmArbF}', '${xrpArbF}')`;

        var sqlF = `INSERT INTO backwardArb (ada, bcc, bnb, eos, etc, eth, icx, iota, ltc, neo, ont, trx, tusd, vet, xlm, xrp)
                    VALUES ('${adaArbB}', '${adaArbB}', '${bccArbB}', '${bnbArbB}', '${eosArbB}', '${etcArbB}', '${ethArbB}',
                    '${icxArbB}', '${iotaArbB}', '${ltcArbB}', '${neoArbB}', '${ontArbB}', '${trxArbB}', '${tusdArbB}',
                    '${xlmArbB}', '${xrpArbB}')`;

        con.query(sqlF, function (err, result) {
          if (err) throw err;
          console.log(time + ": Values have successfully been inserted into database forwards table.");
        });

        con.query(sqlB, function (err, result) {
          if (err) throw err;
          console.log(time + ": Values have successfully been inserted into database backwards table.");
        });

        con.end(function(err) {
          if (err) { return console.log('error:' + err.message); }
          console.log('Database connection has successfully closed.');
        });
    });
}).catch(function(err) {
  console.log(err);
});
