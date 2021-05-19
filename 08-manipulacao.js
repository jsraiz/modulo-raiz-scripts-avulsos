/*
* - Manipular informações

- Transformar
  - map
  - flat e flatMap
  - reverse
  - reduce
  - reduceRight
  - fill
- Combinar
  - Object.assign
  - Operador spread
  - reduce
  - reduceRight
  - concat
- Ordenar
  - sort
- Filtrar
  - filter
  - reduce
  - reduceRight
- Eliminar
  - filter
  - reduce
  - reduceRight
- Localizar
  - find
  - findIndex
- Testar
  - some
  - every
  - includes
*/

// Conversão entre tipos

// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)
// Object.fromEntries(arr)

console.log(Object.keys({ name: 'Ayrton', country: 'Brasil' }));
console.log(Object.values({ name: 'Ayrton', country: 'Brasil' }));

console.log(Object.entries({ name: 'Ayrton', country: 'Brasil' }));

const mapa = new Map(Object.entries({ name: 'Ayrton', country: 'Brasil' }));

console.log(mapa.get('name'));
console.log(mapa.get('country'));

console.log(
  Object.fromEntries([
    ['youtube', 'Programador a Bordo'],
    ['curso', 'JS Raiz'],
  ])
);

{
  const raceResults = {
    first: 'alice',
    second: 'jake',
    third: 'alice'
  };
  
  function invertObj(obj) {
    return Object.fromEntries(
        Object.entries(obj)
          .map(([ key, value ]) => [ value, key ])
      )

  }
  
  console.log(
    invertObj(raceResults)
  )
}

{
  const raceResults = {
    first: 'alice',
    second: 'jake',
    third: 'alice',
    fourth: 'alice',
    fifth: 'jake'
  };
  
  function invert (obj) {
    return Object.entries(obj).reduce(function(acc, [ key, value ]) {
        return ({
          ...acc,
          [value]: [ ...(acc[value] || []), key]
        })
      }, {})
    
  }
  
  console.log(
    invert(raceResults)
  )
}


