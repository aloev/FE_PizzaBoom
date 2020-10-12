import { NullTemplateVisitor } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable';
import { Comida } from '../models/comida.model';
// import 'rxjs/add/observable';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';


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


  autoresE = new EventEmitter<Usuario[]>();  // para el Modal

  // public losowners: string[] = [] ;
  public losowners: Usuario[] = [] ;

  constructor( private store: Store<AppState>) { }

  getMenu(): Observable<any> {  // Weird
    return of(this.platos) ;

  }


  agregarAutores(){
    
    localStorage.setItem('autores', JSON.stringify(this.losowners));
    
  }

  getAutores(): Observable<Usuario[]>{

    let autores = localStorage.getItem('autores');
    autores = JSON.parse(autores);

    if (autores === null) {
      return null;
    }
    else {
      let authors: {} = autores;
      this.losowners = [];

      // Se hace la divission entre id - nombre, solo se inserta el nombre

      Object.values(authors).map((item: Usuario) => {
        this.losowners.push(item);
      });
      return of(this.losowners);
    }

    
  }

  eliminarAutor(id: string ): Observable<any>{

    this.losowners = this.losowners.filter( item => item.id !== id  );
    this.agregarAutores();
    return of(this.losowners);
  }
}
