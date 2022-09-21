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
  // let trueP = help(data, 'truePositive');
  // let falseP = help(data, 'falsePositive');
  // let trueN = help(data, 'trueNegative');
  // let falseN = help(data, 'falseNegative');

  // return _.mapObject(data, (val, key) => help(data, key));

  // return security =
  // {
  //      truePositive: trueP,
  //      falsePositive: falseP,
  //      trueNegative: trueN,
  //      falseNegative: falseN
  //    }
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