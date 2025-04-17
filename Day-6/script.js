function fetchPokemon() {
    const name = document.getElementById('pokemonName').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  
    fetch(url) 
    .then(function(response) {
      return response.text(); 
    })
    .then(function(data) {
      console.log("📦 Raw Response:", data); 
      document.getElementById('rawData').textContent = data; 
    });
  
}