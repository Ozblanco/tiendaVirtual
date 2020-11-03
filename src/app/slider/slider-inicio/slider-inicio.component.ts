import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-slider-inicio',
  templateUrl: './slider-inicio.component.html',
  styleUrls: ['./slider-inicio.component.scss'],
})
export class SliderInicioComponent implements OnInit {

  slideOptions = {
    spaceBetween: 10,
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  };
  slideOptions1 = {
    spaceBetween: 10,
    initialSlide: 0,
    slidesPerView: 1.5,
    speed: 400
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
  sorteo: {img1: string}[] = [
    {
      img1: '/assets/sorteo-banner.jpg'
    }
  ];

  todos: any = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(productos => {
      this.todos = productos;
    });
  }

}
