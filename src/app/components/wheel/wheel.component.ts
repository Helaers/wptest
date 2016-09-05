import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { SlidesService } from '../../services/slides.service';

import { Draggable } from '../../directives/draggable';

@Component({
    selector: 'wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.css'],
    directives: [Draggable],
    providers: [SlidesService],
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})

export class WheelComponent {

    @Input() current:number;
    @Input() total:number;

    @Output() sendSlideId: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private slidesService: SlidesService,
        private router: Router,
        private _eref: ElementRef
    ){}

    // vars
    expanded: Boolean = true;
    showPenDropdown: Boolean = false;
    showAnswersDropdown: Boolean = false;

    // functions
    nextSlide() {
        if (this.current < this.total) {
            this.current = ++this.current;

            let slide = this.slidesService.getSlide(this.current);

            if (slide.visible) {
                this.router.navigate(['/viewer/slide', this.current]);
                this.sendSlideId.emit(this.current);
            } else {
                this.nextSlide();
            }
        } 
    }

    prevSlide() {
        if (this.current > 1) {
            this.current = --this.current;

            let slide = this.slidesService.getSlide(this.current);
            if (slide.visible) {
                this.router.navigate(['/viewer/slide', this.current]);
                this.sendSlideId.emit(this.current);
            } else {
                this.prevSlide();
            }
        }  
    }



    toggleExpandedView() {
        this.expanded = !this.expanded;
    }
    togglePen() {
        this.showPenDropdown = !this.showPenDropdown;
        if (this.showAnswersDropdown) {
            this.showAnswersDropdown = false;
        }
    }
    toggleAnswers() {
        this.showAnswersDropdown = !this.showAnswersDropdown;
        if (this.showPenDropdown) {
            this.showPenDropdown = false;
        }
    }

     onDocumentClick(event) {
         // cfr host @Component
        if (!this._eref.nativeElement.contains(event.target)) {
            this.showPenDropdown = false;
            this.showAnswersDropdown = false;
        } 
    }

}