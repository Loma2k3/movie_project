import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ShowtimesComponent } from './page/showtimes/showtimes.component';
import { NewsComponent } from './page/news/news.component';
import { LoginComponent } from './authentication/login/login.component';
import { MovieDetailComponent } from './card/detail/movie-detail/movie-detail.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { AboutComponent } from './page/about/about.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { BanveComponent } from './page/banve/banve.component';
import { PaymentComponent } from './page/payment/payment.component';
import { ProfileComponent } from './page/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'temp', component: LoginComponent },
    { path: 'showtimes', component: ShowtimesComponent },
    { path: 'news', component: NewsComponent },
    { path:'detail', component:MovieDetailComponent},
    {path:'ticket', component:TicketComponent},
    {path:'about', component:AboutComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignUpComponent},
    {path:'banve', component:BanveComponent},
    {path:'payment', component:PaymentComponent},
    {path:'profile', component:ProfileComponent}
];
