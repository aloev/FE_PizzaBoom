import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalImageService } from '../../services/modal-image.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { Comida } from '../../models/comida.model';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  // public hidemodal: boolean = true;
  // public elnombre: string;
  // public eldescripcion: string;
  // public elimg: string;
  // public elprecio: number;

  public plato: Comida[] = [];

  public losautores: string[] = [];


  public datos;
  // Seleccionamos o iniciamos el valor '0' del <select>
  public opcionSeleccionado: string  = '0';
  private verSeleccion: string        = '';

  public autorSelected: string = '0';
  private verautor: string ;

  public aDish: Comida;

  arregloSubscription: Subscription;


  constructor(
            public modalImageS: ModalImageService,
            public dashServicio: DashboardService,
        ) { 
          this.datos = [1,2,3,4,5,6,7,8,9,10];
          this.aDish = this.modalImageS.deDish;

    // this.hidemodal = this.modalImageS.ocultarModal;
  }


  ngOnDestroy(): void {
    // this.arregloSubscription.unsubscribe();
  }

  

  ngOnInit(): void {


    this.arregloSubscription = this.dashServicio.autoresE.subscribe( creadores => {
      this.losautores = creadores;
      // console.log(this.losautores);
      
    });

    this.lectura();
    
    setTimeout(() => {
      this.desplegarAutores();
    },
     1000); 
  }

  async desplegarAutores() {
    
    let resp = await this.dashServicio.getAutores();

    if( resp === null){ return;}

    this.losautores =   resp;

  }


  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    
  }

  leerA(){ this.verautor = this.autorSelected;}

  lectura(){

    if( this.modalImageS.ocultarModal === false ){
      console.log('Pailana');
      
    }
  }

  // accionar(){

  //   this.ocultarmodal = false;
  //   console.log('hollaaa');
    
  // }

  closeModal(){
    this.modalImageS.cerrarModal();
  }


  addPedido(){

    this.modalImageS.hacerPedido(this.verSeleccion , this.verautor);
    this.closeModal();
    // this.elnombre = this.modalImageS.nombre;
    // this.eldescripcion = this.modalImageS.descripcion;
    // this.elimg = this.modalImageS.img;
    // this.elprecio = this.modalImageS.precio;
  }
}
