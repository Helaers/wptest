import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgStyle } from '@angular/common';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    selector: 'carrousel',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.css'],
    directives: [NgStyle, ROUTER_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarrouselComponent {

    @Input() showCarrousel:boolean;
    @Input() slides:Array<any>;

    @Output() closeCarrousel: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() sendSlideId: EventEmitter<number> = new EventEmitter<number>();

    private index:number = 0;
    private widthThumb:any = -230;
    private totalSlides:any = 7;

    private thumbsToShow:any = 5; // hack om het maar 2 maal te laten sliden

    carrouselStyle: any = {};

    constructor(
        private router: Router
    ){}

    ngOnInit() {

        this.totalSlides = this.slides.length; // zou van service moeten komen
        this.carrouselStyle.width = (this.totalSlides * this.widthThumb * -1 + 24)+'px';

        if (this.index >= this.totalSlides - this.thumbsToShow) {
            this.index = this.totalSlides - this.thumbsToShow;
            if (this.index < 0) {
                this.index = 0;
            }
            let value = this.index * this.widthThumb;
            this.carrouselStyle.marginLeft = value + 'px';
        }
    }

    prev() {
        if (this.index > 0) {
            this.index--;
            let value = this.index * this.widthThumb *3; // hardcoded x3
            this.carrouselStyle.marginLeft = value+'px';
            //checkButtons();
        }
    }

    next() {
        if (this.index < this.totalSlides - this.thumbsToShow) {
            this.index++;
            let value = this.index * this.widthThumb *3;
            this.carrouselStyle.marginLeft = value + 'px';
             //checkButtons();
        }
    }

    close() {
        if (this.showCarrousel) {
            this.showCarrousel = false;
            this.closeCarrousel.emit(this.showCarrousel);
        }
    }

    goToSlide(slide:any) {
        if (!slide.visible) {
            return;
        }
        this.router.navigate(['/viewer/slide', slide.id]);
        this.sendSlideId.emit(slide.id);
        this.close();
    }
}