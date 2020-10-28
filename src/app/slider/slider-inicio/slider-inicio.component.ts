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
  slides: {img: string}[] = [
    {
      img: '/assets/slidesInicio/lays.jpg'
    },
    {
      img: '/assets/slidesInicio/maggi.jpg'
    },
    {
      img: '/assets/slidesInicio/maizena-660x371.jpg'
    },
    {
      img: '/assets/slidesInicio/snacks.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  slideChange( slides: IonSlide){

  }

}
