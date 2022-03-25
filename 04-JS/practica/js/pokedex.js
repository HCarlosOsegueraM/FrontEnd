document.getElementById('searchPoke').addEventListener (
    'click', 
    function () {
        let pokeName = document.getElementById('pokeName').value;
        if (pokeName == '') {
            alert('Favor de igresar el nombre del pokemon');
            return false;
        }
        getPockeData(pokeName);
    }
);

const getPockeData = (pokeName) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        changeImage(data.sprites.front_default);
        setData(data);
    })
}

const changeImage = (url) => {
    let img = document.getElementById('pokeImage');
    img.src = url;
}

const setData = (data) => {
    console.log(data);
    document.getElementById('name').innerHTML = 'Name: ' + data.name;
    document.getElementById('type').innerHTML = 'Type: ' + data.types[0].type.name;
}