import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  datos;
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';

  constructor(){
      this.datos = [1,2,3,4,5,6,7,8,9,10];
  }  

  capturar() {
      // Pasamos el valor seleccionado a la variable verSeleccion
      this.verSeleccion = this.opcionSeleccionado;
      console.log(this.verSeleccion);
      
  }

  ngOnInit(): void {
  }

  // seleccionado(){
  //   console.log('recibido');
    
    
  // }

}
