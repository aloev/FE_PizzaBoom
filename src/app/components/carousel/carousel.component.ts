import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ModalImageService } from '../../services/modal-image.service';
import { Comida } from '../../models/comida.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  public platos: Comida[] = [

    {
      'nombre'        : 'Pizza',
      'descripcion'   : 'mamcakñmvamcñamclas',
      'img'           : '../../../assets/img/pic01.jpg',
      'precio'        :   60,

    },
    {
      'nombre'        : 'Hamburguesa',
      'descripcion'   : 'mamcakñmvamcñamclas',
      'img'           : '../../../assets/img/pic02.jpg',
      'precio'        :   40,

    },
    {
      'nombre'        : 'Panzerotti',
      'descripcion'   : 'mamcakñmvamcñamclas',
      'img'           : '../../../assets/img/pic03.jpg',
      'precio'        :   20,

    },

  ]

  public mirar: boolean = true;

  constructor( private _ngcarousel: NgbCarouselConfig,
              public modalImageS: ModalImageService,

    ){
      _ngcarousel.interval = 5000;
      _ngcarousel.pauseOnHover = true;
      _ngcarousel.showNavigationArrows = false;
  }
  ngOnInit(): void {

  

    // console.log(this.platos);

  }


  abrirModal( plato: Comida ){

    this.mirar = false;
    // console.log(plato);
    this.modalImageS.abrirModal(plato);
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
