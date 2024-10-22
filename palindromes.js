function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

module.exports = (str) => {
  const words = str.split(/\s+/); // Split the string into words
  const palindromes = new Set();

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      const substring = words.slice(i, j + 1).join(' ');
      if (isPalindrome(substring) && substring.length > 1) {
        palindromes.add(substring);
      }
    }
  }

  return Array.from(palindromes);
};
