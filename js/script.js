function tienda() {

    let manzana = 0
    let banana = 0
    let naranja = 0
    let producto
    let seguro
    do { 
        manzana = 0
        banana = 0
        naranja = 0
        producto = 0
        while ((producto !== "fin") && (producto !== "salir")) {
            producto = prompt("Ingrese los productos que desee consumir uno por uno. Cuando termine ingrese 'fin' o 'salir'\n1 Manzana\n1 Banana\n1 Naranja").toLowerCase().trim()
            if (producto === "manzana") {
                manzana++
            }
            if (producto === "banana") {
                banana++
            }
            if (producto === "naranja") {
                naranja++
            }
        }

        function resultado(m, b, n) {
            alert("Usted quiere " + m + " manzanas, " + b + " bananas y " + n + " naranjas.")
        }

        resultado(manzana, banana, naranja)
       
        do {
            seguro = prompt("¿Usted esta seguro/a? Si/No").toLowerCase().trim()
        } while (seguro != "no" && seguro != "si");
       
    
} while (seguro != "si");
    
}

tienda()

alert("Fin del programa")
