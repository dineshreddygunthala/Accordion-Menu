function fetchPokemon() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  
    fetch(url)
      .then(function(response) {
        return response.text(); 
      })
      .then(raw => {
        console.log("📦 Raw Response:", raw);
        document.getElementById('rawData').textContent = raw;
  

      });
  }
  