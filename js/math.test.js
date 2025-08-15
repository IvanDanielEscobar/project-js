// math.test.js
const { suma, resta } = require('./math');

console.assert(suma(2, 3) === 5, 'Test fallido: 2 + 3 !== 5');

console.assert(resta(4, 2) === 2, 'Esto es una resta')