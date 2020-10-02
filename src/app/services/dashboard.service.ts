import { NullTemplateVisitor } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  autoresE = new EventEmitter<string[]>();

  public losowners: string[] = [] ;

  constructor() { }


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
