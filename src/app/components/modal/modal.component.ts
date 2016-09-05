import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    directives: [],
    providers: [],
    styleUrls: ['./modal.component.css'],

})

export class Modal {

    @Input() modalHeader:string;
    @Input() showModal:boolean;
    @Input() modalType:boolean;
    @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() confirmModal: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {    
    }

    close() {
        this.closeModal.emit(this.showModal);
    }

    add() {
        console.log(this.modalType)
        this.confirmModal.emit(this.modalType);
    }

    getModalState() {
        return this.showModal;
    }

}