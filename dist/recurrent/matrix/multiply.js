'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = multiply;
exports.getMultiplyList = getMultiplyList;
exports.multiplyOptimized = multiplyOptimized;
var cachedOptimizedLists = {};
var performance = require('perf_hooks').performance;

/**
 * multiply {left} and {right} matrix weights to {into}
 * @param {Matrix} product
 * @param {Matrix} left
 * @param {Matrix} right
 */
function multiply(product, left, right) {
  var start = performance.now();
  var leftRows = left.rows;
  var leftColumns = left.columns;
  var rightColumns = right.columns;
  var leftWeights = left.weights;
  var rightWeights = right.weights;
  var productWeights = product.weights;
  var leftDeltas = left.deltas;
  var rightDeltas = right.deltas;

  // loop over rows of left
  for (var leftRow = 0; leftRow < leftRows; leftRow++) {
    var leftRowBase = leftColumns * leftRow;
    var rightRowBase = rightColumns * leftRow;
    // loop over cols of right
    for (var rightColumn = 0; rightColumn < rightColumns; rightColumn++) {

      // dot product loop
      var dot = 0;
      //loop over columns of left
      for (var leftColumn = 0; leftColumn < leftColumns; leftColumn++) {
        var rightColumnBase = rightColumns * leftColumn;
        var leftIndex = leftRowBase + leftColumn;
        var rightIndex = rightColumnBase + rightColumn;
        dot += leftWeights[leftIndex] * rightWeights[rightIndex];
        leftDeltas[leftIndex] = 0;
        rightDeltas[rightIndex] = 0;
      }
      productWeights[rightRowBase + rightColumn] = dot;
    }
  }
  var end = performance.now();
  console.log('not optimized product' + product.rows + 'x' + product.columns + ' left' + left.rows + 'x' + left.columns + ' right' + right.rows + 'x' + right.columns + ': ' + (end - start));
}

/**
 * build list for multiply {left} and {right} matrix weights to {into}
 * @param {Matrix} product
 * @param {Matrix} left
 * @param {Matrix} right
 */
function getMultiplyList(product, left, right) {
  var cachedKey = 'product' + product.rows + 'x' + product.columns + 'left' + left.rows + 'x' + left.columns + 'right' + right.rows + 'x' + right.columns;
  if (cachedOptimizedLists[cachedKey]) {
    return cachedOptimizedLists[cachedKey];
  }
  var list = cachedOptimizedLists[cachedKey] = [];
  var leftRows = left.rows;
  var leftColumns = left.columns;
  var rightColumns = right.columns;

  // loop over rows of left
  for (var leftRow = 0; leftRow < leftRows; leftRow++) {
    var leftRowBase = leftColumns * leftRow;
    var rightRowBase = rightColumns * leftRow;
    // loop over cols of right
    for (var rightColumn = 0; rightColumn < rightColumns; rightColumn++) {
      //loop over columns of left
      for (var leftColumn = 0; leftColumn < leftColumns; leftColumn++) {
        var rightColumnBase = rightColumns * leftColumn;
        var leftIndex = leftRowBase + leftColumn;
        var rightIndex = rightColumnBase + rightColumn;
        list.push({ product: rightRowBase + rightColumn, left: leftIndex, right: rightIndex });
      }
    }
  }
  console.log(list.length);
  return list;
}

function multiplyOptimized(product, left, right, list) {
  var start = performance.now();
  var leftWeights = left.weights;
  var rightWeights = right.weights;
  var productWeights = product.weights;
  var leftDeltas = left.deltas;
  var rightDeltas = right.deltas;
  product.weights.fill(0);
  for (var i = 0; i < list.length; i++) {
    var lookup = list[i];
    productWeights[lookup.product] += leftWeights[lookup.left] * rightWeights[lookup.right];
    leftDeltas[lookup.left] = 0;
    rightDeltas[lookup.right] = 0;
  }
  var end = performance.now();
  console.log('optimized product' + product.rows + 'x' + product.columns + ' left' + left.rows + 'x' + left.columns + ' right' + right.rows + 'x' + right.columns + ': ' + (end - start));
}
//# sourceMappingURL=multiply.js.map