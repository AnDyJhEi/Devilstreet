function buscar() {
    var input = document.getElementById("search");
    var filtro = input.value.toLowerCase();
    var productos = document.querySelectorAll(".producto"); // Asegúrate de que ".producto" sea la clase de los elementos de producto que deseas buscar.

    productos.forEach(function(producto) {
        var nombre = producto.querySelector(".nombre").textContent.toLowerCase(); // Asegúrate de que ".nombre" sea la clase del elemento que contiene el nombre del producto.
        if (nombre.includes(filtro)) {
            producto.style.display = "";
        } else {
            producto.style.display = "none";
        }
    });
}
