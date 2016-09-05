import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Params } from '@angular/router';

import { SlidesService } from '../../services/slides.service';
import { InnerContent } from '../../directives/innercontent';

@Component({
    selector: 'slide',
    template: `
        <div class="slide" *ngIf="slide">
            <div [innerContent]="slide.html"></div>
        </div>
    `,
    styleUrls: ['./slide.component.css'],
    directives: [InnerContent],
    providers: [SlidesService]
})

export class SlideComponent {

    private slide: Object = { 'id' : 0, 'title': 'Slide title' };

    constructor(
        private slidesService: SlidesService, 
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.slide = this.slidesService.getSlide(id);

            this.slidesService.currentSlide = this.slide['id']; // can't use this.slide.id ??? -- Property 'id' does not exist on type 'Object'
            //console.log('current slide in SLIDE:' ,this.slidesService.currentSlide)
        });
    }

}