import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registerForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      ho_ten: [''],
      email: [''],
      so_dien_thoai: [''],
      mat_khau: [''],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {  // Kiểm tra nếu form hợp lệ
      const data = {
        ...this.registerForm.value,
        vai_tro: 'quan tri',
        luong: 2000000
      };
  
      axios.post('http://127.0.0.1:8000/api/tai_khoan_khach_hang/signup', data)
        .then(response => {
          this.successMessage = 'Đăng ký thành công!';
          this.registerForm.reset();
        })
        .catch(error => {
          console.error('Đăng ký thất bại', error);
          this.successMessage = 'Đăng ký thất bại. Vui lòng thử lại.';
        });
    } else {
      this.successMessage = 'Vui lòng điền đầy đủ thông tin!';
    }
  }
}
