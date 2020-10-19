import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DashboardService } from '../../services/dashboard.service';
import { AppState } from '../../store/app.reducers';
import * as userActions from '../../store/actions/user.actions';
import { User, Usuario } from '../../models/user.model';
import { Observable } from 'rxjs';
import { UserState } from '../../store/reducers/user.reducer';
import { DELETE } from '../../store/actions/user.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public kahoot: Usuario[] = [] ;
  public popo: Usuario[] = [];
    
  escucharUser: Observable<Array<Usuario>>;
  newescucharUser: Usuario = { nombre: '', id:'' }

  constructor(

    private store: Store<UserState>,


    public dashServicio: DashboardService
  ) { }

  ngOnInit(): void {

    this.llenarAutores();   // Renderiza autores del LS
    this.reEnviarUsuarios();   // Recarga al State
            
  }

  reEnviarUsuarios(){
    for ( let i of this.kahoot ){
      // this.store.dispatch( new userActions.CrearUsuario(i));
      this.store.dispatch(userActions.createUser({usuario: i}));

    }
  }

  // En la barra local
  llenarAutores(){
    this.kahoot = [];
    this.dashServicio.getAutores().subscribe( (item: Usuario[]) => {
      this.kahoot = item;
    });
  }

  agregarAutor(){

    const envio: Usuario = {
      id: new Date().getUTCMilliseconds().toString(),
      nombre: this.newescucharUser.nombre
    };

    this.store.dispatch(userActions.createUser({usuario: envio}));
    // this.store.dispatch(new userActions.CrearUsuario(envio));

    this.dashServicio.losowners.push(envio);
    this.dashServicio.agregarAutores();



    // Segunda parte
    this.llenarAutores();


    
    this.newescucharUser = { nombre :'' };

  }

  deleteUser(id: string ){
    // this.store.dispatch( new userActions.EliminarUsuario(id));
    this.store.dispatch(userActions.deleteUser({id}));
    this.llenarAutores();
  }

}
