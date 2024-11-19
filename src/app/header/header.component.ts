import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  active: string = 'home'
  userId: number | null = null;
  userName: string | null = null;

  constructor(private router:Router) {
    this.checkUserLogin();
  }

  clearUserId(): void {
    localStorage.removeItem('user_id');  // Removes 'user_id' from localStorage
    this.router.navigate(['/home']);
  }

  changeActive(status:string) {
    this.active=status
  }

   // Check if user_id exists in localStorage and assign values
   checkUserLogin(): void {
    const userData = localStorage.getItem('user_id');
    if (userData) {
      const parsedData = JSON.parse(userData); // Assuming the data is stored as a JSON string
      this.userId = parsedData.user_id;  // Assign the user_id from localStorage
      this.userName = parsedData.user_name;  // Assign the user_name from localStorage
    }
  }

}
