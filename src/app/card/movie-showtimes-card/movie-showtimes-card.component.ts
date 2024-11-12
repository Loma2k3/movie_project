import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-showtimes-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-showtimes-card.component.html',
  styleUrl: './movie-showtimes-card.component.css'
})
export class MovieShowtimesCardComponent {
  @Input() title!:string
  @Input() genre!:string
  @Input() date!:string
  @Input() time!:string
  @Input() image!:string
  @Input() thoi_luong!:string
  @Input() id!: string;

  constructor() {
    
  }

  chooseMovie() {
    localStorage.setItem('MovieId', this.id.toString());
    console.log("click choose event");
  }

}
