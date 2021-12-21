import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientesComponent } from "./clientes/clientes.component";
import { DetaillesComponent } from "./clientes/detailles/detailles.component";
import { FormComponent } from "./clientes/form/form.component";
import { LoginComponent } from "./usuarios/login/login.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/clientes',
    pathMatch:'full'
  },
  {
    path:'clientes',
    component: ClientesComponent
  },
  {
    path:'clientes/crear',
    component: FormComponent
  },
  {
    path:'clientes/editar/:id',
    component: FormComponent
  },
  {
    path:'clientes/ver/:id',
    component: DetaillesComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo:''
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}
