
function findWords(board, dict, visited, i, j, word, results){
  
  visited[i][j] = true;
  word += board[i][j];
  if(dict.has(word)){
    results.add(word);
  }
  for(let a = i - 1 ; a <= i + 1 && a < board.length; a++){
    for(let b = j - 1 ; b <= j + 1 && b < board.length; b++){
      if(a >= 0 && b >= 0 && !visited[a][b]){
        findWords(board, dict, visited, a, b, word, results);
      }
    }
  }
  visited[i][j] = false;
  return results;
}

const b = [['p','e','a'],
              ['i','n','p'],
              ['e','l','p']];

const d = new Set(["pine", "pie", "pineapple", "pea", "line", "apple"]);
const v = [];
let r = new Set();
for(let k =0; k < b.length; k++){
  v.push(new Array(b.length).fill(false));
}

for(let i =0 ; i < 3; i++){
  for(let j=0; j < 3; j++){
    r = findWords(b, d, v, i, j, '', r);
  }
}

console.log(r);


