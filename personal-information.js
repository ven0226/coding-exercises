var maskPII = function(S) {
  const atIndex = S.indexOf('@');
  if (atIndex !== -1){
      const email = S.toLowerCase();
      const name = email.substring(0, atIndex);
      const domain = email.substring(atIndex);
      const filler = '*****';
      return `${name[0]}${filler}${name[atIndex - 1]}${domain}`;
  } else {
    const phone = S.replace('(', '').replace(')', '').replace('+', '').replace(/-/g, '').replace(/ +/g, '')
    let output = `***-***-${phone.substring(phone.length - 4)}`;
    if (phone.length > 10) {
      let country = '';
      for(let i = 0; i < phone.length - 10; i++){
        country += '*';
      }
      output = `+${country}-${output}`;
    }
    return output;
  }
};

console.log(maskPII("LeetCode@LeetCode.com"));
console.log(maskPII("AB@qq.com"));
console.log(maskPII("86-(10)12345678"));
console.log(maskPII("1(234)567-890"));
console.log(maskPII("+(501321)-50-23431"));
console.log(maskPII("(3906)2 07143 711"));