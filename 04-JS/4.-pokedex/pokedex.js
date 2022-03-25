document.getElementById('changeImage').addEventListener (
    'click', 
    function () {
        let pokeName = document.getElementById('pokeName').value;
        getPockeData(pokeName);
    }
);

const getPockeData = (pokeName) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
    .then(response => response.json())
    .then(data => changeImage(data.sprites.front_default))
}

const changeImage = (url) => {
    let img = document.getElementById('pokeImg');
    img.src = url;
}