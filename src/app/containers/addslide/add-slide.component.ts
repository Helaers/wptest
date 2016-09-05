import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { WheelComponent } from '../../components/wheel/wheel.component';
import { SlidesService } from '../../services/slides.service';
import { Modal} from '../../components/modal/modal.component'

@Component({
    selector: 'add-slide',
    templateUrl: './add-slide.component.html',
    styleUrls: ['./add-slide.component.css'],
    directives: [ROUTER_DIRECTIVES, WheelComponent, Modal],
    providers: [SlidesService]
})

export class AddSlideComponent {

    private slides:Array<any> = [];
    private type:string = '';
    private id:number;
    private modalType:string = '';
    private modalHeaders:Array<string> = ['Afbeelding importeren', 'Video importeren', 'Audio importeren', 'Hyperlink importeren', 'Bingel oefening importeren']
    private modalHeader = ''

    private textPreview:boolean = false;
    private textSlide:boolean = false;
    private showModal:boolean = false;

    constructor(
        private slidesService: SlidesService,
        private router: Router) { 
        }

    ngOnInit() {
        this.slides = this.slidesService.getAll();
        this.id = this.slides.length + 1;
    }

    showTextPreview() {
        this.type = 'text';
        if (!this.textSlide) {
            this.textPreview = true;
        }
    }
    showSlideText() {
        this.textPreview = false;
        this.textSlide = true;
    }

    clear() {
        this.textPreview = false;
        this.textSlide = false;
        this.type = '';
    }

    sendToOverview() {
        this.addUserSlide(this.id, this.type);
        this.router.navigate(['/editor']);
    }

    private addUserSlide(index, type) {

        let slide = { 
            id: index, 
            html:[], 
            thumb: '', 
            visible: true, 
            type: 'user' 
        };


        switch(type) {
            case 'text':
                slide.html = ["<img class='slide__image' src='./app/images/slide9.png' />"];
                slide.thumb = './app/images/thumb9.png';
                break;
            case 'video':
                slide.html = ["<img class='slide__image' src='./app/images/slide8.png' />"];
                slide.thumb = './app/images/thumb8.png';
                break;
            case 'image':
                slide.html = ["<img class='slide__image' src='./app/images/slide10.png' />"];
                slide.thumb = './app/images/thumb10.png';
            break;
            case 'audio':
                slide.html = ["<img class='slide__image' src='./app/images/slide11.png' />"];
                slide.thumb = './app/images/thumb11.png';
            break;
            case 'link':
                slide.html = ["<img class='slide__image' src='./app/images/slide12.png' />"];
                slide.thumb = './app/images/thumb12.png';
            break;
            case 'bingel':
                slide.html = ["<img class='slide__image' src='./app/images/slide13.png' />"];
                slide.thumb = './app/images/thumb13.png';
            break;
            default:
                console.log('something went wrong in adding slide');
        }

        this.slidesService.addSlide(slide);
    }

    openModal(type){

        //get header by type
        switch(type) {
            case 'image':
                this.modalHeader = this.modalHeaders[0]
                break;
            case 'video':
                this.modalHeader = this.modalHeaders[1]
            break;
            case 'audio':
                this.modalHeader = this.modalHeaders[2]
            break;
            case 'link':
                this.modalHeader = this.modalHeaders[3]
            break;
            case 'bingel':
                this.modalHeader = this.modalHeaders[4]
            break;
        }

        if(this.showModal === false) {
            console.log(type)
            this.modalType = type;
            this.showModal = true;
        }
    }

    closeModal(modalState){
        if(this.showModal === true){
            this.showModal = false
            this.type = ''
            this.modalType = '';
        } 
    }

    confirmModal(type) {
        this.closeModal(true)
        this.type = type;
    }
}