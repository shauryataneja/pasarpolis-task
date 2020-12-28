const assert = require('assert');
const testCases = require('./testData');
const main = require('../src/main');

testCases.forEach((testCase, index) => {
    describe('Test case: '+index, () => {
        it('Evaluation', (done) => {
            const actual = main.getSecondMax(testCase.data);
            console.log(JSON.stringify({testCase, actual}));
            assert.strictEqual(testCase.expected, actual);
            done();
        })
    })
})