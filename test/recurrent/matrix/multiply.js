import assert from 'assert';
import Matrix from '../../../src/recurrent/matrix';
import multiply from '../../../src/recurrent/matrix/multiply';
import { multiplyOptimized, getMultiplyList } from '../../../src/recurrent/matrix/multiply';
import multiplyB from '../../../src/recurrent/matrix/multiply-b';

describe('matrix', () => {
  describe('multiply', () => {
    context('when given a left and right matrix both of 2 rows and 2 columns', () => {
      it('correctly multiplies the values', () => {
        const m1 = Matrix.fromArray([
          [1, 2],
          [3, 4]
        ]);
        const m2 = Matrix.fromArray([
          [5, 6],
          [7, 8]
        ]);
        const result = new Matrix(2, 2);
        multiply(result, m1, m2);
        const weights = [19, 22, 43, 50];
        assert.equal(result.weights.length, 4);
        result.weights.forEach((value, i) => {
          assert.equal(value, weights[i]);
        });
      });
    });
  });

  describe('multiplyOptimized', () => {
    function getMatrices() {
      return {
        left: Matrix.fromArray([
          [1, 2],
          [3, 4]
        ]),
        right: Matrix.fromArray([
          [5, 6],
          [7, 8]
        ]),
        product: new Matrix(2, 2)
      };
    }
    it('works the same as multiply', () => {
      const expected = getMatrices();
      multiply(expected.product, expected.left, expected.right);
      const result = getMatrices();
      const list = getMultiplyList(result.product, result.left, result.right);
      multiplyOptimized(result.product, result.left, result.right, list);
      assert.deepEqual(result.product, expected.product);
    });
  });

  describe('multiplyB', () => {
    context('when given a left and right matrix both of 2 rows and 2 columns', () => {
      it('correctly multiplies the values', () => {
        const m1 = Matrix.fromArray([
          [3, 3],
          [3, 3]
        ]);
        const m2 = Matrix.fromArray([
          [3, 3],
          [3, 3]
        ]);
        const result = Matrix.fromArray([
          [3, 3],
          [3, 3]
        ]);
        multiplyB(result, m1, m2);
        m1.deltas.forEach((value) => {
          assert.equal(value, 21);
        });
        m2.deltas.forEach((value) => {
          assert.equal(value, 21);
        });
      });
    });
    context('when given two different size left and right', () => {
      it('calculates both values in different sizes correctly', () => {
        const productWeights = [
          [0],
          [0],
          [0]
        ];
        const productDeltas = [
          [1],
          [2],
          [3]
        ];
        const leftInputWeights = [
          [1, 2],
          [3, 4],
          [5, 6]
        ];
        const leftInputDeltas = [
          [1, 2],
          [3, 4],
          [5, 6]
        ];
        const rightInputWeights = [
          [1],
          [2]
        ];
        const rightInputDeltas = [
          [1],
          [2]
        ];

        const product = Matrix.fromArray(productWeights, productDeltas);
        const left = Matrix.fromArray(leftInputWeights, leftInputDeltas);
        const right = Matrix.fromArray(rightInputWeights, rightInputDeltas);

        multiplyB(product, left, right);

        assert.deepEqual(left.deltasToArray(), [ [2, 4], [5, 8], [8, 12] ]);
        assert.deepEqual(right.deltasToArray(), [ [23], [30] ]);
      });
    });
  });
});
