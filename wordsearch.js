// Pair programming with @code-driving and @itspladd!

const transpose = function(matrix) {
  // Put your solution here
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        result.push([matrix[i][j]]);
      } else {
        result[j].push(matrix[i][j]);
      }


    }
  }
  return result;
};

// Searches forwards and backwards, horizontally and vertically. Does not search diagonally

const wordSearch = (letters, word) => { 
  if (!letters.length) {
      return `smile`;
  }
  const reversedWord = word.split("").reverse().join("");
  const transposed = transpose(letters);
  const horizontalJoin = letters.map(chars => chars.join(''));
  const verticalJoin = transposed.map(chars => chars.join(''));

  for (row of horizontalJoin) {
      if (row.includes(word)) return true;
      if (row.includes(reversedWord)) return true;
  }
  for (column of verticalJoin) {
    if (column.includes(word)) return true;
    if (column.includes(reversedWord)) return true;
  }

  return false;
}; 


module.exports = wordSearch