import { Injectable } from '@angular/core';
import { Comida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  // public cuenta: Comida;

  public lacuenta: {};

  // get cuenta() : string {

  //   return localStorage.getItem('productos');
  // }

  cargarCuenta(){

    let cuenta = localStorage.getItem('productos');
    cuenta = JSON.parse(cuenta);

    // console.log(typeof(cuenta));
    
    this.lacuenta = cuenta;
    // console.log(typeof(this.lacuenta));
    
    // console.log(this.lacuenta);
  }

  eliminarPlato( platico: Comida){

    

    let cuenta = localStorage.getItem('productos');
    cuenta = JSON.parse(cuenta);

    // console.log(cuenta);

    for (let key in cuenta as {}) {
      if (Object.prototype.hasOwnProperty.call(cuenta, key)) {
        var element = cuenta[key];
        // console.log(element.nombre);
        if(element.nombre === platico.nombre){
          delete cuenta[platico.nombre];

          // element.splice(element, 1);
          break;
        }
        
      }
    }

    // console.log('mirala', cuenta);
    localStorage.setItem('productos', JSON.stringify(cuenta));


  }

  cambiarCantidad( elplatico: Comida, quantity: number){

    // console.log(elplatico);
    // console.log(quantity);

    let cuenta = localStorage.getItem('productos');
    cuenta = JSON.parse(cuenta);

    // console.log(cuenta);

    for (let key in cuenta as {}) {
      if (Object.prototype.hasOwnProperty.call(cuenta, key)) {
        var element = cuenta[key];
        // console.log(element.nombre);
        if(element.nombre === elplatico.nombre){

          cuenta[elplatico.nombre].total = quantity * cuenta[elplatico.nombre].precio;
          cuenta[elplatico.nombre].cantidad = quantity.toString();

          break;
        }
        
      }
    }

    // console.log('mirala', cuenta);
    localStorage.setItem('productos', JSON.stringify(cuenta));



  }

}
