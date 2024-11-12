import { Component, OnInit } from '@angular/core';
import { MovieShowtimesCardComponent } from '../../card/movie-showtimes-card/movie-showtimes-card.component';
import axios from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showtimes',
  standalone: true,
  imports: [MovieShowtimesCardComponent, CommonModule ],
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.css'
})
export class ShowtimesComponent implements OnInit{
  schedules: any[] = [];
  nowShowing: any[] = [];        // Movies currently showing
  upcoming: any[] = [];          // Upcoming movies

  async ngOnInit() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/tim_kiem_phim/lichchieu');
      this.schedules = response.data;
      localStorage.setItem('schedules', JSON.stringify(this.schedules));

      // Filter schedules into 'Now Showing' and 'Upcoming' categories
      const today = new Date().toISOString().split('T')[0]; // Current date in 'YYYY-MM-DD' format

      this.nowShowing = this.schedules.filter(schedule => {
        return schedule.phim.ngay_phat_hanh <= today;
      });

      this.upcoming = this.schedules.filter(schedule => {
        return schedule.phim.ngay_phat_hanh > today;
      });
    } catch (error) {
      console.error('Error fetching movie schedules:', error);
    }
  }
}
