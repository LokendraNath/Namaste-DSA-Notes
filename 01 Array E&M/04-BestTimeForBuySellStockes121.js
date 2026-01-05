let prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let m = prices[0];
  let mP = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - m > mP) {
      mP = prices[i] - m;
    }
    if (prices[i] < m) {
      m = prices[i];
    }
  }
  return mP;
};
console.log(maxProfit(prices));
