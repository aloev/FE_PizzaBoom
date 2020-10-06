import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Comida } from '../../models/comida.model';
import { DashboardService } from '../../services/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarMenu } from '../../store/actions/menu.actions';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  public dePlatos : Comida[] = [];

  public mirar: boolean = true;

  constructor(  private store: Store<AppState>,
                private _ngcarousel: NgbCarouselConfig,
              // public modalImageS: ModalImageService,

    ){
      _ngcarousel.interval = 5000;
      _ngcarousel.pauseOnHover = true;
      _ngcarousel.showNavigationArrows = false;
  }
  ngOnInit(): void {

    this.store.select('menu').subscribe( ({ platos}) => {

      this.dePlatos = platos;
      
    });

    this.store.dispatch( cargarMenu());

    // console.log(this.platos);

  }


  abrirModal( plato: Comida ){

    this.mirar = false;
    // console.log(plato);
    // this.modalImageS.abrirModal(plato);
  }
  // public ocultarModal: boolean = true;

  // abrirModal( plato: Comida ){
  //   this.ocultarModal = false;   // Esto hace que se Muestre el MODAL
  //   console.log(this.ocultarModal);

  // }
  // closeModal(){
  //   this.ocultarModal = true;
  // }


}
