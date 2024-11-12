import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BanveComponent } from '../../../page/banve/banve.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, BanveComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  schedules: any[] = [];         // Array to hold parsed schedules
  selected: any = null;  // The schedule found by ID
  banve:boolean= false

  releaseYear!: string;
  releaseMonth!: string;
  releaseDate!: string;

  splitReleaseDate() {
    const [year, month, date] = this.selected.phim.ngay_phat_hanh.split('-');
    this.releaseYear = year;
    this.releaseMonth = month;
    this.releaseDate = date;
  }

  ngOnInit() {
    // Retrieve the schedules array from localStorage
    const storedSchedules = localStorage.getItem('schedules');
    const scheduleId = localStorage.getItem('MovieId');

    // Parse schedules if it exists
    if (storedSchedules) {
      this.schedules = JSON.parse(storedSchedules);
    }

    // Find the schedule with the specified ID, if both schedules and ID exist
    if (scheduleId && this.schedules.length > 0) {
      const id = parseInt(scheduleId, 10); // Convert MovieId to a number, if it's numeric
      this.selected = this.schedules.find(schedule => schedule.id === id);

      if (this.selected) {
        console.log('Selected schedule:', this.selected);
        this.splitReleaseDate()
      } else {
        console.log('No schedule found with ID:', id);
      }
    } else {
      console.log('No schedules or ID found in localStorage');
    }
  }
}
