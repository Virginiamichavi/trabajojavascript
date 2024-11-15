/***conectar con archivos JSON para introducir a noticias 1 del index */
const resultados = document.getElementById("resultados");
const errorDiv = document.getElementById("error");

function realizarFetch(url){
    return fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error("Error en la solicitud: " + response.statusText)
        }
        return response.json()
    })

.then(data =>{ 
    data.forEach(usuario => {
        resultados.innerHTML +=
        `
        <div>
            <h3 class="fotojson">${usuario.trabajos}</h3>
            <img src="./assets/images/trabajos/trabajo3.png" alt="fototrabajo html" width="1250" heigth="761" class="img-fluid">
            <img src="./assets/images/trabajos/trabajo2.png" alt="fototrabajo html" width="1343" heigth="764" class="img-fluid">
            <p class="text-center fw-bold g-3 py-3">${usuario.nombre}</p>
            <a href="./views/galeria.html"><p class="galeria text-center">${usuario.galeria}</p></a>            
        </div>

        `
    })    
})

}
realizarFetch('./assets/json/noticias.json');

