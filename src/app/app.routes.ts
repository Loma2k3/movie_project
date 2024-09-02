import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ShowtimesComponent } from './page/showtimes/showtimes.component';
import { NewsComponent } from './page/news/news.component';
import { LoginComponent } from './authentication/login/login.component';
import { MovieDetailComponent } from './card/detail/movie-detail/movie-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'temp', component: LoginComponent },
    { path: 'showtimes', component: ShowtimesComponent },
    { path: 'news', component: NewsComponent },
    { path:'detail', component:MovieDetailComponent}
];
