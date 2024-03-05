function load(){
    let url = 'https://pokeapi.co/api/v2/pokemon/1019/';
    fetch(url)
    .then((response) => {
      return response.json();  
    })
    .then((data) => {
       console.clear();
       console.log(data) 
       document.getElementById('nome').innerHTML = data['name'];
       document.getElementById('idPoke').innerHTML = data['id'];
       let img = data ['sprites']['front_default'];
       document.getElementById('imgP').setAttribute('src',img);
    })
    .catch((erro) => {
    console.log("erro "+ erro)
    });
}
document.getElementById('btnBusca').onclick = load;