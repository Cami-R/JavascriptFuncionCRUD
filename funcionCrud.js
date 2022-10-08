//ARMAR ARRAY DE OBJETOS
let productos=[
    {
        nombre: "Zanahorias",
        cod:  1,
        precio: 150
    },
   {
        nombre: "Medialunas",
        cod:  2,
        precio: 345
   },
   {
        nombre: "Capuccino",
        cod:  3,
        precio: 879
  },
  {
        nombre: "Polenta",
        cod:  4,
        precio: 250
   },
    {

        nombre: "Pan",
        cod:  5,
        precio: 473
    }
]





   


//FUNCIONES
function agregarP(){
    let pro=prompt("¿Que producto desea agregar?\nIndique su nombre: ")
    let cod=Number(prompt("Indique su codigo de venta:"))
    let pre=Number(prompt("Indique su precio:"))

    let n={nombre:pro,cod:cod,precio:pre}
    productos.push(n);
    mostrarP()
}



function eliminarP(){
    mostrarP()
    let codEliminar=Number(prompt("Codigo del producto a eliminar: "))
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].cod === codEliminar) {
            productos.splice(i,1)
        }
    
    }
    console.log(productos)
    mostrarP()
    
  
}

function mostrarP(){
    console.log(productos)
    let alerta=""
    for(let j=0;j<productos.length;j++){
    let codigo="\n*******\n"+productos[j].nombre+"\n-------->"+"Codigo: "+" "+productos[j].cod+" "+"Precio: "+productos[j].precio

    alerta+=codigo

}
alert("Los productos son: "+`\n${alerta}`)
//por consola
console.log(productos)

}

function modNombre(){
    let aviso=alert("Se le mostrara la lista de productos y sus codigos")
    mostrarP()
    let nCod=Number(prompt("Codigo del producto a modificar: "))
    let nuevoNom=prompt("Ingrese un nuevo nombre: ")
    for(let i=0;i<productos.length;i++){
        if (productos[i].cod===nCod){
            productos[i].nombre=nuevoNom
        }
    
}
mostrarP()
}
 
do{
    op=Number(prompt("1-Ver lista de productos por la consola\n2-Agregar productos\n3-Eliminar productos\n4-Modificar nombre\n5-Salir\nIngrese opcion: "))

    switch(op){
        case 1:
            mostrarP()
           
            break
        case 2:
            agregarP()
            break
        case 3:
            eliminarP()
            break
        case 4:
            modNombre()
            break
        case 5:
            alert("saliendo...")
            break
        default:
            alert("No existe esa opcion,vuelva a ingresar")
        }
}while(op!=5);