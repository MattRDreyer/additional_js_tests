function multiples(numOne,numTwo){
let emptyArray = [];
for (i=1; i<=100; i++) {
  if (i % numOne === 0 && i % numTwo === 0) {
    emptyArray.push(i);
  }
}

return emptyArray;
}
module.exports = multiples;
