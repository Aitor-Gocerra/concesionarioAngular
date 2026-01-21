import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesComponent } from './coches.component';

const routes: Routes = [{ path: '', component: CochesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CochesRoutingModule { }
