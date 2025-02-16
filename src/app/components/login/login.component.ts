import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly _AuthService = inject(AuthService);

  loginForm: FormGroup = new FormGroup({
    role: new FormControl('0'),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next: (res) => {
          // action
          console.log(res);
        },
        error: (err) => {
          // display error message
          console.log(err);
        },
      });
      // console.log(this.loginForm.value);
    }
  }
}
