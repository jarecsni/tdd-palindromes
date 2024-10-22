const palindromes = require('./palindromes');

describe('palindromes', () => {
  it('should identify one word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecar')).toEqual(['racecar']);
  });
  it('should return an empty array when no palindromes are found', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
  });
  it('detects multi word palindromes', () => {
    expect(palindromes('nurses run')).toEqual(['nurses run']);
    expect(palindromes('nurses run fast')).toEqual(['nurses run']);
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
      'A man, a plan, a canal, Panama',
    ]);
  });
});
