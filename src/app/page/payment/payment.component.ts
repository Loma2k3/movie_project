import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-payment',
  standalone: true ,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  bookingData: any;
  Movie: any;
  schedules: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const bookingData = localStorage.getItem('bookingData');
    const schedules = localStorage.getItem('schedules'); // Assuming `schedules` is stored separately

    if (bookingData) {
      this.bookingData = JSON.parse(bookingData);
    } else {
      console.log('No booking data found in localStorage');
    }

    if (schedules) {
      this.schedules = JSON.parse(schedules);
    } else {
      console.log('No schedule data found in localStorage');
    }

    this.Movie = this.schedules.find(item => item.id === this.bookingData?.lich_chieu_id);
    console.log(this.Movie);
  }

  thanhToan():void{
    const seats = this.bookingData.so_ghe;

    try {
      for (const seat of seats){
        let data = {
          ngay_dat: this.bookingData.ngay_dat,
          tong_tien: 50000,
          phuong_thuc: this.bookingData.phuong_thuc,
          user_id: this.bookingData.user_id,
          so_ghe: seat,
          lich_chieu_id:this.bookingData.lich_chieu_id
        };
  
        axios.post('http://127.0.0.1:8000/api/thong_tin_ve_xem_phim/datve', data)
  
      }
    } catch (error) {
      return alert('error occur')
    }

    alert('đặt vé thành công')
    this.router.navigate(['/detail']);
  }

  back():void{
    this.router.navigate(['/detail']);
  }
}
