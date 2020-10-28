import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  page: string;
  selectSlide: any;
  segment = 0;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
  };
  items:string[]=[
    "SLIDE1",
    "SLIDE2",
    "SLIDE3",
    "SLIDE4",
  ]
  constructor() {}

  ngOnInit() {
  }

  async segmentChanged( event ) {

    /* const valorSegmento = event.detail.value;
    this.page = valorSegmento; */
    await this.selectSlide.slideTo(this.segment);

  }

  slideChange( slides: IonSlides ) {

    this.selectSlide = slides;
    slides.getActiveIndex().then(selectIndex => {
      this.segment = selectIndex;
    });

  }

}
