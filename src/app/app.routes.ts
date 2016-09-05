import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { EditorComponent } from './containers/editor/editor.component';
import { ViewerComponent } from './containers/viewer/viewer.component';
import { AddSlideComponent } from './containers/addslide/add-slide.component';

import { SlideComponent } from './components/slide/slide.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { 
        path: 'home', 
        component: HomeComponent,
    },
    { 
        path: 'editor', 
        component: EditorComponent 
    },
    {
        path: 'editor/add-slide',
        component: AddSlideComponent
    },
    { 
        path: 'viewer', 
        component: ViewerComponent,
        children: [
            { 
                path: '', 
                redirectTo: 'slide/:id', 
                pathMatch: 'full' 
            },
            { 
                path: 'slide/:id', 
                component: SlideComponent 
            }
        ]
    },
];

export const routing = RouterModule.forRoot(routes);