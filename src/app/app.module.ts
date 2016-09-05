import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

// services
import { SlidesService } from './services/slides.service';

import { AppComponent } from './app.component';
// containers
import { HomeComponent } from './containers/home/home.component';
import { ViewerComponent } from './containers/viewer/viewer.component';
import { EditorComponent } from './containers/editor/editor.component';
import { AddSlideComponent } from './containers/addslide/add-slide.component';

// components
import { WheelComponent } from './components/wheel/wheel.component';
import { SlideComponent } from './components/slide/slide.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Modal } from './components/modal/modal.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewerComponent,
    EditorComponent,
    AddSlideComponent,
    //components
    WheelComponent,
    SlideComponent,
    SidebarComponent,
    Modal,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SlidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
