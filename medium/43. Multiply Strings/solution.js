function multiply(num1, num2) {
  let m = num1.length;
  let n = num2.length;
  let product = Array(m+n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const digit1 = Number(num1[i]);
      const digit2 = Number(num2[j]);
      
      // multiply digit1 * digit2 at the index i+j+1
      const sum = product[i+j+1] + (digit1 * digit2)
      // get the last digit of the sum
      product[i+j+1] = sum%10
      
      // devide the sum by 10 at the index i+j
      product[i+j] += Math.floor(sum / 10)
    }
  }
  
  let i = 0;
  let result = ""
  
  // increment the i to remove the leading zeros
  while (i < product.length && product[i] === 0) {
    i++;
  }

  if (i === product.length) return "0";
  
  // strigify the product array
  for (; i < product.length; i++) {
    result += product[i];
  }

  return result;
}
