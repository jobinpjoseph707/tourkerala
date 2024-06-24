import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { DistritcsComponent } from './pages/distritcs/distritcs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LooperdistrictComponent } from './pages/looperdistrict/looperdistrict.component';

export const routes: Routes = [

    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'distritcs',component:DistritcsComponent},
    {path:'contact',component:ContactComponent}, 
    {path:':id',component:LooperdistrictComponent}, 
    {path:'**',component:PageNotFoundComponent}


];
