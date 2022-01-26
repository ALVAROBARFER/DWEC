fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json()) 
  .then(data => { 
       data.results.forEach(pokemon => {
           console.log('%c' + pokemon.name, 'background: #777; color: #fff')
       }); 
  });
