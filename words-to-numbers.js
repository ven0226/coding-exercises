const words2numbers = (words) => {
  const wordsSplit = words.split(/ +/);
  const number = {
    "three": 3,
    "four": 4,
    "five": 5,
    "two": 2,
    "hundred": 100,
    "thousand": 1000,
    "forty": 40,
  };
  const delim = "thousand";
  let temp = 0;
  let output = 0;
  for(word of wordsSplit){
    const n = number[word];
    if(word === delim){
      temp = temp * n;
      output += temp;
      temp = 0;
    } else if (word === 'hundred'){
      temp = temp * n;
    } else {
      temp += n;
    }
  }
  return output + temp;
}


console.log(words2numbers('two hundred forty three thousand five hundred forty two'));