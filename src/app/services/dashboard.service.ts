import { NullTemplateVisitor } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable';
import { Comida } from '../models/comida.model';
// import 'rxjs/add/observable';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


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


  autoresE = new EventEmitter<string[]>();

  public losowners: string[] = [] ;

  constructor() { }

  getMenu(): Observable<any> {  // Weird
    return of(this.platos) ;

  }


  agregarAutores(){

    localStorage.setItem('autores', JSON.stringify(this.losowners));
    this.getAutores();
  }

  getAutores(){

    let autores = localStorage.getItem('autores');
    autores = JSON.parse(autores);

    if (autores === null) {

      return null;
    }
    else {
      
      // console.log( typeof autores);
      
      let authors: {} = autores;
      // console.log( typeof authors);
      
      this.losowners = [];
      Object.values(authors).map((item: string) => {
        // console.log( typeof item);
  
        this.losowners.push(item);
  
      });

      return this.losowners;
    }


  }


}
