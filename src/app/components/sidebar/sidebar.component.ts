import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class SidebarComponent {

    showLeftSidebar: Boolean = false;
    showRightSidebar: Boolean = false;

    toggleLeftSidebar() {
        this.showLeftSidebar = !this.showLeftSidebar;
        if (this.showRightSidebar) {
            this.showRightSidebar = false;
        }
    }

    toggleRightSidebar() {
        this.showRightSidebar = !this.showRightSidebar;
        if (this.showLeftSidebar) {
            this.showLeftSidebar = false;
        }
    }
}