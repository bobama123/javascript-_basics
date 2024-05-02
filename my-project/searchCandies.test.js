
const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('searches for Ma and price less than 10', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});


describe('searchCandies', () => {
    it('searches for Ma and price less than 2', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });
});

describe('searchCandies', () => {
    it('searches for S and price less than 10', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
});

describe('searchCandies', () => {
    it('searches for S and price less than 4', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
});

describe('searchCandies', () => {
    it('searches for lowercase ma and price less than 10', () => {
        expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});


