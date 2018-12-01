const cachedOptimizedLists = {};
const performance = require('perf_hooks').performance;

/**
 * multiply {left} and {right} matrix weights to {into}
 * @param {Matrix} product
 * @param {Matrix} left
 * @param {Matrix} right
 */
export default function multiply(product, left, right) {
  const start = performance.now();
  const leftRows = left.rows;
  const leftColumns = left.columns;
  const rightColumns = right.columns;
  const leftWeights = left.weights;
  const rightWeights = right.weights;
  const productWeights = product.weights;
  const leftDeltas = left.deltas;
  const rightDeltas = right.deltas;

  // loop over rows of left
  for(let leftRow = 0; leftRow < leftRows; leftRow++) {
    const leftRowBase = leftColumns * leftRow;
    const rightRowBase = rightColumns * leftRow;
    // loop over cols of right
    for(let rightColumn = 0; rightColumn < rightColumns; rightColumn++) {

      // dot product loop
      let dot = 0;
      //loop over columns of left
      for(let leftColumn = 0; leftColumn < leftColumns; leftColumn++) {
        const rightColumnBase = rightColumns * leftColumn;
        const leftIndex = leftRowBase + leftColumn;
        const rightIndex = rightColumnBase + rightColumn;
        dot +=
            leftWeights[leftIndex]
          * rightWeights[rightIndex];
        leftDeltas[leftIndex] = 0;
        rightDeltas[rightIndex] = 0;
      }
      productWeights[rightRowBase + rightColumn] = dot;
    }
  }
  const end = performance.now();
  console.log(`not optimized product${product.rows}x${product.columns} left${left.rows}x${left.columns} right${right.rows}x${right.columns}: ${(end - start)}`);
}

/**
 * build list for multiply {left} and {right} matrix weights to {into}
 * @param {Matrix} product
 * @param {Matrix} left
 * @param {Matrix} right
 */
export function getMultiplyList(product, left, right) {
  const cachedKey = `product${product.rows}x${product.columns}left${left.rows}x${left.columns}right${right.rows}x${right.columns}`;
  if (cachedOptimizedLists[cachedKey]) {
    return cachedOptimizedLists[cachedKey];
  }
  const list = cachedOptimizedLists[cachedKey] = [];
  const leftRows = left.rows;
  const leftColumns = left.columns;
  const rightColumns = right.columns;

  // loop over rows of left
  for(let leftRow = 0; leftRow < leftRows; leftRow++) {
    const leftRowBase = leftColumns * leftRow;
    const rightRowBase = rightColumns * leftRow;
    // loop over cols of right
    for(let rightColumn = 0; rightColumn < rightColumns; rightColumn++) {
      //loop over columns of left
      for(let leftColumn = 0; leftColumn < leftColumns; leftColumn++) {
        const rightColumnBase = rightColumns * leftColumn;
        const leftIndex = leftRowBase + leftColumn;
        const rightIndex = rightColumnBase + rightColumn;
        list.push({ product: rightRowBase + rightColumn, left: leftIndex, right: rightIndex });
      }
    }
  }
  console.log(list.length);
  return list;
}

export function multiplyOptimized(product, left, right, list) {
  const start = performance.now();
  const leftWeights = left.weights;
  const rightWeights = right.weights;
  const productWeights = product.weights;
  const leftDeltas = left.deltas;
  const rightDeltas = right.deltas;
  product.weights.fill(0);
  for (let i = 0; i < list.length; i++) {
    const lookup = list[i];
    productWeights[lookup.product] += leftWeights[lookup.left] * rightWeights[lookup.right];
    leftDeltas[lookup.left] = 0;
    rightDeltas[lookup.right] = 0;
  }
  const end = performance.now();
  console.log(`optimized product${product.rows}x${product.columns} left${left.rows}x${left.columns} right${right.rows}x${right.columns}: ${(end - start)}`);
}
