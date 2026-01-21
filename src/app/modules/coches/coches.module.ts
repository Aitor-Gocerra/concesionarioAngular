import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CochesRoutingModule } from './coches-routing.module';
import { CochesComponent } from './coches.component';
import { MarcarPrecioDirective } from 'src/app/directives/marcar-precio.directive';


@NgModule({
  declarations: [
    CochesComponent,
    MarcarPrecioDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CochesRoutingModule
  ]
})
export class CochesModule { }
