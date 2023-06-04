let manzana = 0
let banana = 0
let naranja = 0
let producto

while (producto != ("fin" || "salir")) {
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

console.log(producto)
console.log("El numero de manzanas es " + manzana)
console.log("El numero de bananas es " + banana)
console.log("El numero de naranjas es " + naranja)