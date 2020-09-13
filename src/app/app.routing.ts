import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
    // pagina por defecto
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path:'dashboard', component:DashboardComponent},
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