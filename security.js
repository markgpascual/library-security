const help = (data, keyword) => {
  return _.reduce(_.pluck(data, keyword), (memo, num) => memo + num);
};

const analyzeSecurity = (data) => {
  let security = {};
  security.truePositive = help(data, 'truePositive');
  security.falsePositive = help(data, 'falsePositive');
  security.trueNegative = help(data, 'trueNegative');
  security.falseNegative = help(data, 'falseNegative');
  return security;
};

console.log(analyzeSecurity([
  {
    truePositive: 1,
    falsePositive: 4,
    trueNegative: 8,
    falseNegative: 2,
  },
  {
    truePositive: 2,
    falsePositive: 4,
    trueNegative: 16,
    falseNegative: 1,
  }
]));
// console.log(help(
//   [
//     {
//       truePositive: 1,
//       falsePositive: 4,
//       trueNegative: 8,
//       falseNegative: 2,
//     },
//     {
//       truePositive: 2,
//       falsePositive: 4,
//       trueNegative: 16,
//       falseNegative: 1,
//     }
//   ],
// 'truePositive'));

// e26

var items = [
  {price1: 100, price2: 200, price3: 150},
  {price1: 10, price2: 50},
  {price1: 20, price2: 20, price3: 13},
]
var names = _.chain(items).map(function(n) {  return _.keys(n);  }).flatten().unique().value();
console.log(_.map(names, function(n) {
  return  n + ': ' + eval((_.chain(items).pluck(n).compact().value()).join('+'));
}).join(', '));
