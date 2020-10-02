import { Injectable, OnInit } from '@angular/core';
import { Comida } from '../models/comida.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModalImageService {


  public _ocultarModal: boolean = true;

  public nombre: string;
  public descripcion: string;
  public img: string;
  public precio: number;

  public deDish: Comida;
  
  // clave
  get ocultarModal(){
    // console.log('holaaaa');
    
    return this._ocultarModal;
  }

  // desplegarAutores(){

  //   let autors = localStorage.getItem('autores');

  //   autors = JSON.parse(autors);
  
  // }


  abrirModal( plato: Comida ){
    this._ocultarModal = false;   // Esto hace que se Muestre el MODAL

    this.nombre = plato.nombre;
    this.descripcion = plato.descripcion;
    this.img = plato.img;
    this.precio = plato.precio;
    
    this.deDish = new Comida(
      plato.nombre,
      plato.descripcion,
      plato.img,
      plato.precio
   
     );

    //  console.log(this.deDish.nombre);

    // this.nombre = plato.nombre;
    // this.descripcion = plato.descripcion;
    // this.img = plato.img;
    // this.precio = plato.precio;

    // console.log(plato);
    
    
  }
  cerrarModal(){
    this._ocultarModal = true;
  }

  hacerPedido( cantidad: string, autor: string ){
    // console.log('mirela:', cantidad);
    this.deDish.cantidad = (cantidad);
    this.deDish.autor = autor;
    this.guardarLocalStorage(this.deDish); 
  }


  guardarLocalStorage( dish: Comida ){

    const nam1 = ['Pizza','Hamburguesa','Panzzeroti' ];
    let pedidos1  = localStorage.getItem('productos');

    pedidos1 = JSON.parse(pedidos1);
    let pedidos;

                  // Posee o No
    if( pedidos1){
      for( let item of nam1 ){
        let temp;

        try {
          temp = pedidos1[dish.nombre].nombre;       // Evalua Keys de Obj
        } catch (e) {
          temp = null;
        }
                     // Coincide o No
                     

        if(temp && pedidos1[dish.nombre].autor === dish.autor ){
          console.log(pedidos1[dish.nombre].autor);
          console.log(dish.autor);

            if( pedidos1[dish.nombre].nombre === item && pedidos1[dish.nombre].autor === dish.autor){         // sobra

              let int1 = parseInt(dish.cantidad);
              let int2 = parseInt(pedidos1[dish.nombre].cantidad);
              let sum = int1 + int2;
              
            
              dish.total =  sum * dish.precio;

              const n  = sum.toString();
              console.log('Existe compatibilidad');
              dish.cantidad = n;


              // pedidos = {
              //   ...pedidos1 as {},             // Conserva
              //   'pepito': {[ dish.nombre ]: dish}
              // }
              // console.log('ped', pedidos);
              
              pedidos = {
                
                ...pedidos1 as {},             // Conserva
                [ dish.nombre ]: dish
              }
              break;
            }
        }
              // Nueva Orden
        else {
          let quant = parseInt(dish.cantidad);
          dish.total =  quant * dish.precio;

          console.log('Hola', dish.autor);
          

          pedidos = {
            ...pedidos1 as {},
             [ dish.nombre ]: dish,
          }
          
          console.log(pedidos);
          
           // let pedidoA = { ...pedidos1 as {}};
          // let pedidoB = {'pepito':{[ dish.nombre ]: dish}};
          
          // console.log('A', pedidoA);
          // console.log('B', pedidoB);
          // console.log(pedidos);

        }
      }
    }
                  // Primera Vez
    else {
      let quant = parseInt(dish.cantidad);
      dish.total =  quant * dish.precio;
      pedidos = {
        [ dish.nombre ]: dish
      }

    }

    localStorage.setItem('productos', JSON.stringify(pedidos));
  }

  constructor(  
    ) { }
}
