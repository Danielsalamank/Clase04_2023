
// Función para obtener los productos
function ObtenerProductos() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://api.escuelajs.co/api/v1/products", requestOptions)
    .then(response => response.text())
    .then(result => renderDto(result))
    .catch(error => console.log('error', error));
}

function renderDto(dto) {
    console.log(dto)
    var obj = JSON.parse(dto);
    console.log(obj);
    var html = "";
    var table = "<table border='1'>";
    
    table += "<th>Id</th>";
    table += "<th>Titulo</th>";
    table += "<th>Precio</th>";
    table += "<th>descripción</th>";
    table += "<th>Categoria</th>";
    table += "<th>Imagen</th>";
    table += "</tbody>";

    obj.forEach(item => {
        table += "<tr>";
        table += "<td>" + item.id + "</td>";
        table += "<td>" + item.title + "</td>";
        table += "<td>" + item.price + "</td>";
        table += "<td>" + item.description + "</td>";
        table += "<td>" + item.category.name + "</td>";
        table += "<td> <img src='" + item.images[0] + "' alt='Nombre Imagen' width='20px' /> <img src='" + item.images[1] + "' alt='Nombre Imagen' width='20px' /> <img src='" + item.images[2] + "' alt='Nombre Imagen' width='20px' /></td>";
        table += "</tr>";
    });

    table += "</tbody>";
    table += "</table>";
    html = table;

    document.getElementById("MostrarProductos").innerHTML = html;
}