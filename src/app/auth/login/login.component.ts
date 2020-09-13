import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public inizilizarForm: FormGroup;




  constructor(
                private router: Router,
                private fb: FormBuilder,
                private authService: AuthService,
  ) { 
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.inizilizarForm = this.fb.group({
      email: [ localStorage.getItem('email') || '' ,  [Validators.required, Validators.email]],
      password: ['',  Validators.required],
    
    }); 
 }

  login(){

    console.log('Entrando');
    console.log(this.inizilizarForm.value);

    this.authService.loginUsuario(this.inizilizarForm.value)
                .subscribe( resp => {
                  console.log(resp);
                  
                  this.router.navigateByUrl('/dashboard'); // este es el dashboard

                });
  }
}
