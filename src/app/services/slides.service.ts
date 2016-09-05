import { Injectable } from '@angular/core';

import { Draggable } from '../directives/draggable'; // just to shut up TS

// const SLIDES = [
//   { id: 1, html:"<img class='slide__image' src='./app/images/slide1.png' />" },
//   { id: 2, html:"<img class='slide__image' src='./app/images/slide2.png' />" },
//   { id: 3, html:"<img class='slide__image' src='./app/images/slide3.png' />" },
//   { id: 4, html:"<img class='slide__image' src='./app/images/slide4.png' />" },
//   { id: 5, html:"<img class='slide__image' src='./app/images/slide5.png' />" },
//   { id: 6, html:"<img class='slide__image' src='./app/images/slide6.png' />" },
//   { id: 7, html:"<img class='slide__image' src='./app/images/slide7.png' />" }
// ];

let SLIDES = [
  { id: 1, html:["<img class='slide__image' src='./app/images/slide1.png' />"], thumb: './app/images/thumb1.png', visible: true },
  { id: 2, html:["<img class='slide__image' src='./app/images/slide2.png' />"], thumb: './app/images/thumb2.png', visible: true },
  { id: 3, html:["<img class='slide__image' src='./app/images/slide3.png' />"], thumb: './app/images/thumb3.png', visible: true },
  { id: 4, html:["<img class='slide__image' src='./app/images/slide4.png' />"], thumb: './app/images/thumb4.png', visible: true },
  { 
      id: 5, 
      html: [
          "<img class='slide__image' src='./app/images/slide5.png' />" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable one'>81 338</div>" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable two'>100 000</div>" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable three'>87 307</div>"+
            "<div [draggable] style='position:absolute' class='slide__label--draggable four'>7 030</div>" +
            "<div [draggable] style='position:absolute' class='slide__label--draggable five'>72 166</div>", [Draggable]
            ],
        thumb: './app/images/thumb5.png',
        visible: true
    },
    { id: 6, html:["<img class='slide__image' src='./app/images/slide6.png' />"], thumb: './app/images/thumb6.png', visible: true },
    { id: 7, html:["<img class='slide__image' src='./app/images/slide7.png' />"], thumb: './app/images/thumb7.png', visible: true }
];

@Injectable()
export class SlidesService {

    public currentSlide:number;

    getAll() {
        return SLIDES;
    }

    setSlides(slides) {
        SLIDES = slides;
    }

    getSlide(id:number) {
        return SLIDES.find(item => item.id === id);
    }

    addSlide(slide:any) {
        SLIDES.push(slide);
    }

    removeSlide(slide:any) {
        let slideToRemove = SLIDES.find(item => item.id === slide.id);
        let index = SLIDES.indexOf(slideToRemove);
        if (index > -1) {
            SLIDES.splice(index, 1);
        }
    }

    toggleVisibility(id:number) {
        let slide = this.getSlide(id);
        slide.visible = !slide.visible;
    }
}