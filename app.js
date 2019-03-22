/*
Para esta aplicación se va a realizar una clase
para la interfaz y una clase para el producto
cada uno con sus metodos.
*/

/*Se crea la clase producto con su constructor
que va recibir los parametros
*/
//Clase producto
class producto {
    constructor (nom, precio, year){
        this.nom = nom;
        this.precio = precio;
        this.year = year;
    }
}
//Clase para la interface IU
class UI {
    //Metodo addProduct es la que accede al dom para poder alterarlo
    addProduct() {

    } 
    //Metodo deleteProduct para eliminar un producto 
    deleteProduct(){

    }
    //Metodo showMessage Nos permite mostrar un mensaje 
    showMessage(){

    }
}

//DOM Events - Para capturar los eventos del usuario sobre el navegador
 //Me permite capturar un elemento por el id dado en el index.html
 //Mas .add el evento que quiero capturar
document.getElementById('formProduct').addEventListener('submit', function (){
    alert('Enviando formulario');
})
