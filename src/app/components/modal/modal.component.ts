import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalImageService } from '../../services/modal-image.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { Comida } from '../../models/comida.model';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription, Observable } from 'rxjs';
import { Usuario } from '../../models/user.model';
import { Store } from '@ngrx/store';
import * as fromUser from '../../store/app.reducers';
import {  selectAll, selectEntities, selectIds } from 'src/app/store/reducers';
// import { getsom } from '../../store/reducers/index';
import { ejecutarOrden } from '../../store/actions/orden.actions';
import { Orden } from '../../models/orden.model';


import * as fromUSer from '../../store/reducers/user.reducer';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {


  public plato: Comida[] = [];

  public losautores: Usuario[] = [];


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
            private store: Store<fromUser.AppState>,
        ) { 
          this.datos = [1,2,3,4,5,6,7,8,9,10];
          

    // this.hidemodal = this.modalImageS.ocultarModal;
  }


  ngOnDestroy(): void {
    // this.arregloSubscription.unsubscribe();
  }



  ngOnInit(): void {

    this.store.select(fromUSer.selectAll).subscribe((items: Usuario[]) => {
      this.losautores = items;
    });

    this.modalImageS.carta$.subscribe( (plato: Comida) => {
      this.aDish = plato;
      console.log('llegooo', this.aDish);
      
    });
  }


  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    
  }

  leerA(){ this.verautor = this.autorSelected;}

  closeModal(){
    
    this.modalImageS.cerrarModal();
  }


  addPedido(){

    // Lo unico que pasamos acà es cantidad y Autor

    let nombredel: Usuario;

    for( let index of this.losautores ){

      if( this.verautor === index.nombre ){
        nombredel = index;
      }
    }

    const enviar: Orden = {

      id: new Date().getUTCMilliseconds().toString(),
      cliente: this.verautor,
      platos: [this.aDish],
      userId: nombredel.id
    };

    this.store.dispatch( ejecutarOrden( {orden: enviar}));
    this.modalImageS.hacerPedido(this.verSeleccion , this.verautor);
    this.closeModal();

  }
}
