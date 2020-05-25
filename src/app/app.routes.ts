import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { VillainsComponent } from './components/villains/villains.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';



const APP_ROUTE: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'villanos', component: VillainsComponent },
    { path: 'detalles/:id', component:  HeroDetailsComponent },
    { path: 'search/:busqueda', component:  HeroSearchComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);
