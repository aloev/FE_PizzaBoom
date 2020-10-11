import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DashboardService } from '../../services/dashboard.service';
import { AppState } from '../../store/app.reducers';
import { CrearUsuario } from '../../store/actions/user.actions';
import { User, Usuario } from '../../models/user.model';
import { Observable } from 'rxjs';
import { UserState } from '../../store/reducers/user.reducer';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public kahoot: string[] = [] ;

  escucharUser: Observable<Array<Usuario>>;
  newescucharUser: Usuario = { nombre: '', id:'' }

  constructor(

    private store: Store<UserState>,


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

    console.log('mira', this.newescucharUser);
    

    const envio: Usuario = {
      id: new Date().getUTCMilliseconds().toString(),
      nombre: this.newescucharUser.nombre
    }
    this.store.dispatch(new CrearUsuario(envio));

    

    // usuari.push(Elnombre);

    // this.store.dispatch( crearUsuario( { usuario: usuari } ));

    
    this.kahoot.push(this.newescucharUser.nombre);
    this.dashServicio.losowners = this.kahoot;
    this.dashServicio.agregarAutores();

    this.dashServicio.autoresE.emit(this.kahoot);
    this.newescucharUser = { nombre :'' };
    // console.log('ve', palabra.toLowerCase());

  }


}
