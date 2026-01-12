let prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let max = prices[0];
  let maxProVl = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - max > maxProVl) {
      maxProVl = prices[i] - max;
    }
    if (prices[i] < max) {
      max = prices[i];
    }
  }
  return maxProVl;
};
console.log(maxProfit(prices));
