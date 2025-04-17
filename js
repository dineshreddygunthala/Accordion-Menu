function fetchPokemon() {
  const name = document.getElementById('pokemonName').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`; // ✅ use backticks here

  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(raw => {
      console.log("📦 Raw Response:", raw);
      document.getElementById('rawData').textContent = raw;

      const jsonData = JSON.parse(raw); // ✅ parsing JSON

      document.getElementById('pokeName').textContent = `Name: ${jsonData.name}`;
      const types = jsonData.types.map(t => t.type.name).join(', ');
      document.getElementById('pokeType').textContent = `Type(s): ${types}`;
      document.getElementById('pokeHeight').textContent = `Height: ${jsonData.height}`;
    })
    .catch(error => {
      console.error("❌ Error:", error);
      document.getElementById('rawData').textContent = "Failed to fetch Pokémon. Please check the name.";
    });
}
