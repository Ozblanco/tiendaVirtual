import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderInicioComponent } from './slider-inicio/slider-inicio.component';
import { SliderCategoriasComponent } from './slider-categorias/slider-categorias.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SliderInicioComponent, SliderCategoriasComponent],
  exports: [SliderInicioComponent, SliderCategoriasComponent],
  imports: [CommonModule, IonicModule]
})
export class SliderModule { }
