import { Component, Output, EventEmitter } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { SlidesService } from '../../services/slides.service';

@Component({
    selector: 'viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.css'],
    providers: [SlidesService]
})

export class ViewerComponent {

    private currentSlide:number; // komt voorlopig van URL... deze id zou ik van de slide.component moeten halen -- hoe? /
    private totalSlides:number;
    private carrousel: boolean = false;
    private slides:Array<any> = [];

    constructor(
        private slidesService: SlidesService,
        private router: Router) { 

        }

    ngOnInit() {
        this.currentSlide = this._getSlideFromUrl();
        this.slides = this.slidesService.getAll();
        this.totalSlides = this.slides.length;
    }

    ngAfterViewInit() {
        this.currentSlide = this._getSlideFromUrl();
    }

    getCurrentSlide(currentSlide:number) {
        this.currentSlide = currentSlide;
    }

    _getSlideFromUrl() {
        let url = this.router.url;
        let index = url.lastIndexOf('/');
        return +url.substr(index+1);
    }

    toggleCarrousel() {
        this.carrousel = !this.carrousel;
    }

    getCarrouselState(state:boolean) {
        this.carrousel = state;
    }
}