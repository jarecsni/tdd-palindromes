const palindromes = require('./palindromes');

describe('palindromes', () => {
    it('should identify one word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam']);
    });
});