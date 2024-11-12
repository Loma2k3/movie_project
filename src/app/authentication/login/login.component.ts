import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  message = "";

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      // If user_id exists, navigate to '/home'
      this.router.navigate(['/home']);
    }
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mat_khau: ['', [Validators.required]] // Use 'mat_khau' for password
    });
  }

  reloadPage(): void {
    // Navigate to the current route
    //this.router.navigate(["/home"]);
    window.location.reload();
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, mat_khau } = this.loginForm.value; // Extract email and password
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/tai_khoan_khach_hang/login', {
          email: email,
          mat_khau: mat_khau // Send password as 'mat_khau'
        });

        if (response.data.message === "login successful") {
          // Store user_id in local storage
          localStorage.setItem('user_id', JSON.stringify(response.data));
          this.message="login success"; // Handle success
          this.reloadPage()
        }
      } catch (error) {
        this.message="login failed"; // Handle error
      }
    }
  }
}
