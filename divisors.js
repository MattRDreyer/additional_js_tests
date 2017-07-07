function divisors(numOne){
let emptyArray = [];
for (i=1; i<=numOne; i++) {
  if (numOne % i === 0) {
    emptyArray.push(i);
  }
}

return emptyArray;
}
module.exports = divisors;
