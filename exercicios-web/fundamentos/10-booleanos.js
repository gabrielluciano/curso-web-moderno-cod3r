let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1

console.log(!isAtivo);
console.log(!!isAtivo);

console.log('os verdadeiros... ');

console.log(!!3);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || ' ')); //true pois ' ' é true
console.log(('' || null || 0 || 'epa' || 123)); //retorna o único verdadeiro ou o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') //Exemplo de aplicação do caso anterior

nome = 'Lucas'
console.log(nome || 'Desconhecido') //Exemplo de aplicação do caso anterior