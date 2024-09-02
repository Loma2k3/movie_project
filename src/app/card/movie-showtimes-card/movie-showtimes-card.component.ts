import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-showtimes-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-showtimes-card.component.html',
  styleUrl: './movie-showtimes-card.component.css'
})
export class MovieShowtimesCardComponent {
  constructor() {
    
  }
}
