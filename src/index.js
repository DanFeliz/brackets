module.exports = function check(str, bracketsConfig) {
  const openBrack = [];
  const brackPair = {};
  bracketsConfig.forEach(el1 => {
    openBrack.push(el1[0]);
    brackPair[el1[1]] = el1[0];
  });

  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
    
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    
    if (stack.length !== 0 && brackPair[currentSymbol] === topElement) {
      stack.pop();
    } else if (openBrack.includes(currentSymbol)) {
        stack.push(currentSymbol);
    } 
    else 
    {
        if (stack.length === 0) return false;
        
        if (brackPair[currentSymbol] === topElement) {       
          stack.pop();
        } 
        else {
          return false;
        }
   }
  }
  
  return stack.length === 0;
}
