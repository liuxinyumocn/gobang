var e = require("../js/evaluate-point.js");
var S = require("../js/score.js");
var assert = require('assert');

var b;

describe('test evalute', function() {
  it(`test one`, function() {
    b = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b, [3, 3], 1), S.TWO + 3*S.ONE);
  });

  it(`test TWO`, function() {
    b = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b, [3, 3], 1), S.THREE + 3*S.ONE);
  });


  it(`test THREE`, function() {
    b = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b, [3, 3], 1), S.FOUR + 3*S.ONE);
  });


  it(`test FOUR `, function() {
    b = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b, [3, 3], 1), S.FIVE + 3*S.ONE);
  });
});
