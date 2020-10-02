import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


const routes: Routes = [
    // pagina por defecto
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'      },
    {path: 'dashboard' ,     component:     DashboardComponent  },
    {path: 'prueba' ,        component:     PruebaComponent     },
    {path: 'checkout' ,      component:     CheckoutComponent   },
    // {path: 'modal' , component: ModalComponent},
    {path: '**', component: LoginComponent},
];
@NgModule({
declarations: [],
imports: [
    RouterModule.forRoot(routes)

],
exports: [ RouterModule]
})

export class AppRoutingModule{}