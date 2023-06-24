import { RouterModule, Routes } from '@angular/router';
import { landingComponent } from './Landing/landing.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosOfertasComponent } from './precios-ofertas/precios-ofertas.component';
import { CrudComponent } from './sistema/crud/crud.component';
import { ProductosGBComponent } from './productos/productos-gb.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ImpulsoComponent } from './impulso/impulso.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CortedepeloComponent } from './cortedepelo/cortedepelo.component';
import { ColoreadoComponent } from './coloreado/coloreado.component';
import { PeinadoComponent } from './peinado/peinado.component';
import { ExtcabelloComponent } from './extcabello/extcabello.component';
import { MaquillajeComponent } from './maquillaje/maquillaje.component';

const routes: Routes = [
  {path:'', component: landingComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'precios', component: PreciosOfertasComponent},
  {path:'crud', component: CrudComponent},
  {path:'productos', component: ProductosGBComponent},
  {path:'login', component: LoginComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'cortedepelo', component: CortedepeloComponent},
  {path:'coloreado', component: ColoreadoComponent},
  {path:'peinado', component: PeinadoComponent},
  {path:'extcabello', component: ExtcabelloComponent},
  {path:'maquillaje', component: MaquillajeComponent},
  {path:'precios-ofertas', component: PreciosOfertasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
