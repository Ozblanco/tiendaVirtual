import { Component, OnInit } from '@angular/core';
import { IonSlide } from '@ionic/angular';

@Component({
  selector: 'app-slider-inicio',
  templateUrl: './slider-inicio.component.html',
  styleUrls: ['./slider-inicio.component.scss'],
})
export class SliderInicioComponent implements OnInit {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {}

  slideChange( slides: IonSlide){

  }

}
