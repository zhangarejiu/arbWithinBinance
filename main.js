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

      var adjPriceEth = (1 / ethBtc) * ethUsdt;
      var arbEth = (((adjPriceEth - btcUsdt) / btcUsdt) * 100).toFixed(3);

      var adjPriceXrp = (1 / xrpBtc) * xrpUsdt;
      var arbXrp = (((adjPriceXrp - btcUsdt) / btcUsdt) * 100).toFixed(3);


      var sql = `INSERT INTO arbs (ethArb, xrpArb, timestamp) VALUES ('${arbEth}', '${arbXrp}', '${time}')`;


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
  console.log(err)
});


var con = mysql.createConnection({
  host: "localhost",
  user: "nicolas",
  password: "21npineave",
  database: "arbWithin"
});
