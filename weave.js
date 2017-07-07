function weave(str, nth, replaceWith){

for (var i = nth-1; i < str.length-1; i+=nth) {
    str[i] = replaceWith;
}
return str.join("");
}

module.exports = weave;
