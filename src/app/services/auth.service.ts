// import { Component, OnInit, NgZone } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, Validators } from '@angular/forms';

import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError, delay } from 'rxjs/operators' ;
import { Admin } from '../models/admin.model';
import { Router } from '@angular/router';
import { LoginForm } from '../interfaces/login-form.interface';
import { environment } from '../../environments/environment.prod';

const base_url = environment.base_url;  // Comunica el endpoint del back end


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {


    public admin: Admin;

    constructor( private http: HttpClient,
                 private router: Router,
                 private ngZone: NgZone ) { 

        }

        // Obtenerlo
  get token() : string {
    return localStorage.getItem('token') || '';
  }



  get uid(): string {
    return this.admin.uid || '';
  }

  get headers(){
    return {
      headers: {
        'x-token':this.token
      }
    }
  }
  guardarLocalStorage( token: string, menu: any){
    localStorage.setItem('token', token);
    localStorage.setItem('menu', JSON.stringify(menu));

  }

  loginUsuario( formData: LoginForm ) {

    console.log(formData);
    
    return this.http.post(`${ base_url}/login`, formData);
                
    // return this.http.post(`${ base_url}/login`, formData);
  }

}