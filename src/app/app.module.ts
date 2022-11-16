// MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosDiariosComponent } from './gastos-diarios/gastos-diarios.component';
import { GastosfijosComponent } from './gastosfijos/gastosfijos.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngresosComponent,
    GastosDiariosComponent,
    GastosfijosComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
