import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosOfertasComponent } from './precios-ofertas/precios-ofertas.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './sistema/crud/crud.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosGBComponent } from './productos/productos-gb.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { landingComponent } from './Landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ImpulsoComponent } from './impulso/impulso.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CortedepeloComponent } from './cortedepelo/cortedepelo.component';
import { ColoreadoComponent } from './coloreado/coloreado.component';
import { PeinadoComponent } from './peinado/peinado.component';
import { ExtcabelloComponent } from './extcabello/extcabello.component';
import { MaquillajeComponent } from './maquillaje/maquillaje.component';

@NgModule({
  declarations: [
    AppComponent,
    landingComponent,
    ServiciosComponent,
    PreciosOfertasComponent,
    LoginComponent,
    CrudComponent,
    FooterComponent,
    ProductosGBComponent,
    HeaderComponent,
    ImpulsoComponent,
    ContactoComponent,
    CortedepeloComponent,
    ColoreadoComponent,
    PeinadoComponent,
    ExtcabelloComponent,
    MaquillajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    FontAwesomeModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
