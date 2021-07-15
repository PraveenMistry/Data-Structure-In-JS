// Best Time to Buy and Sell Stock II

/*

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

*/

let prices = [7,1,5,3,6,4] //[1,2,3,4,5];

let maxProfit = function(prices) {
    // add price delta to profit if price is increasing
    let profit = 0
    for (let i=0; i < prices.length;i++){
      if (prices[i] > prices[i-1] ) {
          profit += prices[i] - prices[i-1]
        } 
    }
    return profit
};

maxProfit(prices);