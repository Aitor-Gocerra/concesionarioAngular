import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CochesRoutingModule } from './coches-routing.module';
import { CochesComponent } from './coches.component';
import { MarcarPrecioDirective } from 'src/app/directives/marcar-precio.directive';
import { KmPipe } from './km.pipe';


@NgModule({
  declarations: [
    CochesComponent,
    MarcarPrecioDirective,
    KmPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CochesRoutingModule
  ]
})
export class CochesModule { }
