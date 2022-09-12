'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = null;
  var numm = num.toString().split("").reverse();

  for (var i=0; i < numm.length; i++){
    decimal += numm[i] * (2**i);
}
  return decimal;
}


function DecimalABinario(num) {
  // tu codigo aca
  let binario = "";
  while(num > 0) {
    binario = num % 2 + binario;
    num = Math.floor(num/2);
  }

  return binario;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}