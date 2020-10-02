import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../services/checkout.service';
import { Comida } from '../../models/comida.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  public deCuenta: {};
  public arreglo: Comida[] = [];
  public total: number = 0;
  datos;
  public opcionSeleccionado: string  = '0';
  public verSeleccion: string        = '';
  constructor(
                public checkoutS: CheckoutService
  ) { 

    this.datos = [1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit(): void {

    this.revisar();
  }
  
  revisar(){
    // this.arreglo = [];
    this.checkoutS.cargarCuenta();
    this.deCuenta = this.checkoutS.lacuenta;
    // console.log(this.deCuenta);
    
    // console.log(typeof(this.deCuenta));
    
    // Key
    Object.values(this.deCuenta).map( (item: Comida) => {

      // console.log(item);
      
      this.arreglo.push(item);
      this.total +=  item.total;
    });

  }

  eliminarPed( plato: Comida)  {

    // console.log(plato);
    this.limpiarVars();
    this.checkoutS.eliminarPlato(plato);

    this.ngOnInit();
  }

  limpiarVars(){
    this.total = 0;
    this.arreglo = [];
    this.deCuenta = {};
  }

  variarCant(plato: Comida){

    this.limpiarVars();
    let cantidad: number = parseInt(this.opcionSeleccionado);
    
    this.checkoutS.cambiarCantidad(plato, cantidad);
    this.ngOnInit();
    window.location.reload();  // TODO: cambiar este aproach
  }

}
