/*
 * Converte um número decimal para uma string binária
 */
function decimalParaBinario(numeroDecimal) {
    var pilha = new Stack();
    var resto;
    var stringBinaria = '';

    while(numeroDecimal > 0) {
        resto = Math.floor(numeroDecimal % 2);
        pilha.push(resto);
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }

    while(!pilha.isEmpty()) {
        stringBinaria += pilha.pop().toString();
    }

    return stringBinaria;
}

/*
 * Converte um número decimal para uma string em uma das bases: 2, 4, 8 e 16
 */
function decimalParaBase(numeroDecimal, base) {
    var pilha = new Stack();
    var resto;
    var stringBase = '';
    var digitos = '0123456789ABCDEF';

    while(numeroDecimal > 0) {
        resto = Math.floor(numeroDecimal % base);
        pilha.push(resto);
        numeroDecimal = Math.floor(numeroDecimal / base);
    }

    while(!pilha.isEmpty()) {
        stringBase += pilha.pop().toString();
        stringBase += digitos[pilha.pop()];
    }

    return stringBase;
}

/*
    Retorna um array do tamanho de size com termos enumerados de size até 1
*/
function createNonSortedArray(size) {
    let array = [];
    for(i = 0, j = size; i < size && j > 0; i++, j--) {
        array[i] = j;
    }
    return array;
}


function stringBemFormada(string)
{
   stack = new Stack();
   for (let i = 0; i < string.length; ++i) {
      let char;
      switch (string[i]) {
         case ')': if (stack.isEmpty()) return false;
                   char = stack.pop();
                   if (char != '(') return false;
                   break;
         case ']': if (stack.isEmpty()) return false;
                   char = stack.pop();
                   if (char != '[') return false;
                   break;
         default:  stack.push(string[i]);
      }
   }
   return stack.isEmpty();
}