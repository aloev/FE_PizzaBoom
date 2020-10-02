import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public kahoot: string[] = [] ;

  public autorform= this.fb.group({
    nombre:[]
  });

  constructor(
    private fb: FormBuilder,
    public dashServicio: DashboardService
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.llenarAutores();
    }, 500); 

  }

  llenarAutores(){

    this.kahoot = [];
    // console.log('antes', this.kahoot);
    let reps = this.dashServicio.getAutores();
    
    if (reps === null){ return;}

    
    this.kahoot = reps;
    // console.log('despues', this.kahoot);
    
  }



  agregarAutor(){

    let palabra: string = this.autorform.get('nombre').value;
    
    this.kahoot.push(palabra);
    this.dashServicio.losowners = this.kahoot;
    this.dashServicio.agregarAutores();

    this.dashServicio.autoresE.emit(this.kahoot);

    // console.log('ve', palabra.toLowerCase());

    this.autorform.reset();
  }


}
