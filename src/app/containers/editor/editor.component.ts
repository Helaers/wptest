import { Component } from '@angular/core';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { WheelComponent } from '../../components/wheel/wheel.component';

import { SlidesService } from '../../services/slides.service';

@Component({
    selector: 'editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
    directives: [ROUTER_DIRECTIVES, WheelComponent, Dragula],
    providers: [DragulaService]
})

export class EditorComponent {

    private totalSlides: number;
    private slides: Array<any> = [];

    constructor(
        private slidesService: SlidesService,
        private router: Router,
        private dragulaService: DragulaService) {
        dragulaService.drop.subscribe((value) => {
            this.onDrop();
        });
    }

    ngOnInit() {
        this.slides = this.slidesService.getAll();
        this.totalSlides = this.slides.length;
    }

    toggleVisibility(id: number) {
        this.slidesService.toggleVisibility(id);
        this.slides = this.slidesService.getAll();
    }

    addUserSlide() {
        let slide = { id: 8, html: ["<img class='slide__image' src='./app/images/slide8.png' />"], thumb: './app/images/thumb8.png', visible: true, type: 'user' };
        this.slidesService.addSlide(slide);
        this.slides = this.slidesService.getAll();
    }
    
    delete(slide: any) {
        this.slidesService.removeSlide(slide);
        this.orderSlides();
    }

    private onDrop() {
        // do something
        this.orderSlides();
        // send to "backend"
        this.slidesService.setSlides(this.slides);
    }

    private orderSlides() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].id = i + 1;
        }
    }
}