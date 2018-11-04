class WeightedPriceAverage {

  constructor(array, balance) {
    this.array = array;
    this.balance = balance;
  }

  get weightedUsdtPrice() {
    return this.calcUsdtWp();
  }

  get weightedBtcPrice() {
    return this.calcBtcWp();
  }

  calcUsdtWp() {
    var orderVolume = 0;
    var i = 0;
    var weightedPrice = 0;
      do {
        orderVolume = orderVolume + (this.array[i][0] * this.array[i][1]);
        weightedPrice = weightedPrice + (this.array[i][0] * ((this.array[i][0] * this.array[i][1]) / this.balance));

          if (orderVolume > this.balance) {
            var remainder = orderVolume - this.balance;
            weightedPrice = weightedPrice - (this.array[i][0] * (remainder / this.balance));
          }
        i++;
      }
      while (orderVolume <= this.balance);
      return(weightedPrice);
  }

  calcBtcWp() {
    var orderVolume = 0;
    var i = 0;
    var weightedPrice = 0;
      do {
        orderVolume = orderVolume + (this.array[i][1] * 1);
        weightedPrice = weightedPrice + (this.array[i][0] * ((this.array[i][1] *1) / this.balance));

          if (orderVolume > this.balance) {
            var remainder = orderVolume - this.balance;
            weightedPrice = weightedPrice - (this.array[i][0] * (remainder / this.balance));
          }
        i++;
      }
      while (orderVolume <= this.balance);
      return(weightedPrice);
  }
}

module.exports = WeightedPriceAverage;
