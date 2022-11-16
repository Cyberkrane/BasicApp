import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosDiariosComponent } from './gastos-diarios/gastos-diarios.component';
import { GastosfijosComponent } from './gastosfijos/gastosfijos.component';
import { HomeComponent } from './home/home.component';
import { IngresosComponent } from './ingresos/ingresos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ingresos' , component: IngresosComponent},
  {path:'gastos diarios', component: GastosDiariosComponent},
  {path:'gastos fijos', component: GastosfijosComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
