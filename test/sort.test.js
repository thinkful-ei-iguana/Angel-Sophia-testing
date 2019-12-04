const expect = require('chai').expect;
const sort = require('../sort');

describe('sort function', () => {
    it('should put them in order', () => {
        const actualAnswer = sort([2, 5, 3, 4 ,1]);
        const expectedAnswer = [1, 2, 3, 4, 5];
        expect(actualAnswer).to.deep.equal(expectedAnswer);
        // use expect(arr1).to.deep.equal(arr2) to compare arrays
    });

    it()








})