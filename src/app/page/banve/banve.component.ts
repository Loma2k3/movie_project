import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-banve',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banve.component.html',
  styleUrl: './banve.component.css'
})
export class BanveComponent implements OnChanges, OnInit{
  @Input() thoi_gian !: string;
  @Input() ten_phong !: string;
  selectedSeat : string[]=[];
  user_id: number | null = null;
  movieId: number | null = null;
  ngay_dat: string = new Date().toISOString().split('T')[0];  // Current date in YYYY-MM-DD format
  phuong_thuc: string = 'Cash';
  seat_sum_cost: number=0;

  ticketData: any[] = [];

  constructor(private router: Router) {}

  isSeatSelected(seat:string):boolean{
    return this.selectedSeat.includes(seat)
  }

  isSeatOccupied(seat: string): boolean {
    return this.ticketData.includes(seat);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.thoi_gian)
  }

  ngOnInit(): void {
    this.getMovieId()

    if (this.movieId) {
      const url = `http://127.0.0.1:8000/api/thong_tin_ve_xem_phim/thongtinve/${this.movieId}`;

      axios.get(url)
        .then(response => {
          // Extract only `so_ghe` from each ticket object and store it in `seatNumbers`
          this.ticketData = response.data.map((ticket: any) => ticket.so_ghe);
          console.log('Seat numbers:', this.ticketData);
        })
        .catch(error => {
          console.error('Error fetching ticket data:', error);
        });
    }
  }


  chonGhe(seat: string): void {
    if(this.ticketData.includes(seat)){
      return
    }

    if (this.selectedSeat.includes(seat)){
      const index = this.selectedSeat.indexOf(seat)
      this.selectedSeat.splice(index,1)
      this.seat_sum_cost -= 50000
    }else{
      this.selectedSeat.push(seat);  // Update the selected seat
      console.log(`Seat selected: ${seat}`);
      this.seat_sum_cost += 50000
    }
    
  }

  //đặt vé

  // Get user_id from localStorage
  getUserData(): void {
    const userData = localStorage.getItem('user_id');
    if (userData) {
      const parsedData = JSON.parse(userData);
      this.user_id = parsedData.user_id;  // Assign the user_id from localStorage
      console.log(this.user_id)
    }
  }

  // Get MovieId (lich_chieu_id) from localStorage
  getMovieId(): void {
    this.movieId = JSON.parse(localStorage.getItem('MovieId') || 'null');
    console.log(this.movieId)
  }

  // Make the POST request to book a ticket
  bookTicket(): void {
    this.getUserData();
    this.getMovieId();
    if(this.selectedSeat.length===0){
      return alert('bạn chưa chọn ghế')
    }

    const seatClose = this.selectedSeat.filter(item => this.ticketData.includes(item))

    if(seatClose.length !== 0){
      return alert(`${seatClose.join(', ')} đã được chọn`)
    }

    // if(this.isSeatOccupied(this.selectedSeat)){
    //   return alert('Ghế này đã được chọn')
    // }
    if (this.user_id && this.movieId) {
      const data = {
        ngay_dat: this.ngay_dat,
        tong_tien: this.seat_sum_cost,  // You can replace this with dynamic value if necessary
        phuong_thuc: this.phuong_thuc,
        user_id: this.user_id,
        so_ghe: this.selectedSeat,  // Replace with actual seat value, e.g., "A10"
        lich_chieu_id: this.movieId
      };

      localStorage.setItem('bookingData', JSON.stringify(data));

      // axios.post('http://127.0.0.1:8000/api/thong_tin_ve_xem_phim/datve', data)
      //   .then(response => {
      //       console.log('Booking successful:', response.data.message);
      //       alert('Đặt vé thành công!');        
      //       window.location.reload();
      //   })
      //   .catch(error => {
      //     console.error('There was an error making the request:', error);
      //     alert('Có lỗi xảy ra, vui lòng thử lại!');
      //   });

      this.router.navigate(['/payment']);
    } else {
      alert('đăng nhập để đặt vé');
    }
  }

}
