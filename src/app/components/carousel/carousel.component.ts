import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Comida, food } from '../../models/comida.model';
import { DashboardService } from '../../services/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarMenu } from '../../store/actions/menu.actions';
import { ModalImageService } from '../../services/modal-image.service';
import { selectAll } from 'src/app/store/reducers';

import * as fromMenu from '../../store/reducers/menu.reducer';
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
              public modalImageS: ModalImageService,

    ){
      _ngcarousel.interval = 5000;
      _ngcarousel.pauseOnHover = true;
      _ngcarousel.showNavigationArrows = false;
  }
  ngOnInit(): void {

    console.log('legooooooo');

    this.store.select(fromMenu._selectAll).subscribe((items: food[]) => {
      this.dePlatos = items;
    });

    
    // this.store.select('menu').subscribe( ({ platos}) => {
    //   this.dePlatos = platos;
    // });

    this.store.dispatch( cargarMenu());
  }


  abrirModal( plato: Comida ){

    this.mirar = false;
    this.modalImageS.abrirModal(plato);
    this.modalImageS.carta$.emit(plato);
  }


}
