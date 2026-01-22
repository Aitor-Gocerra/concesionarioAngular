import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './modules/coches/coches.component';

const routes: Routes = [
  { path: '', component: CochesComponent},
  { path: 'coches', loadChildren: () => import('./modules/coches/coches.module').then(m => m.CochesModule) }, 
  { path: 'ofertas', loadChildren: () => import('./modules/ofertas/ofertas.module').then(m => m.OfertasModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
