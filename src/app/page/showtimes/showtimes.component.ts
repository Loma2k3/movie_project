import { Component } from '@angular/core';
import { MovieShowtimesCardComponent } from '../../card/movie-showtimes-card/movie-showtimes-card.component';

@Component({
  selector: 'app-showtimes',
  standalone: true,
  imports: [MovieShowtimesCardComponent],
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.css'
})
export class ShowtimesComponent {

}
