import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSignDivVisible: boolean = true;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  loginError: string = '';
  registerSuccess: string = '';
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group(
      {
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        mdp: ['', [Validators.required, Validators.minLength(6)]],
        passConf: ['', [Validators.required]],
        tel: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  private passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('mdp')?.value;
    const confirmPassword = form.get('passConf')?.value;
    return password && confirmPassword && password !== confirmPassword
      ? { passwordsDontMatch: true }
      : null;
  }

  register() {
    this.submitted = true;

    if (this.registerForm.valid) {
      const { mdp, passConf, ...rest } = this.registerForm.value;
      const user = { ...rest, mdp: mdp };

      this.authService.register(user).subscribe(
        (response) => {
          this.registerSuccess = 'Successful registration';
          this.toastr.success('Successful registration', 'Success');
          this.registerForm.reset();
        },
        (error) => {
          this.toastr.error('Error while registering', 'Error');
        }
      );
    } else {
      this.showFormErrors();
    }
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
  
      this.authService.login(credentials).subscribe(
        (response: any) => {
          if (response.user) {
            localStorage.setItem('id', response.user.id);
            localStorage.setItem('nom', response.user.nom);
            localStorage.setItem('prenom', response.user.prenom);
            this.router.navigate(['/home']);
            this.toastr.success('Connection successful', 'Success');
          }
        },
        (error) => {
          const errorMessage = error.error?.error || 'Connection error'; //message d'erreur de l'API 
          this.toastr.error(errorMessage, 'Error'); 
        }
      );
    } else {
      this.showFormErrors2();
    }
  }
  

  private showFormErrors() {
    if (this.registerForm.get('nom')?.hasError('required')) {
      this.toastr.error('Last Name is required', 'Error');
    }
    if (this.registerForm.get('prenom')?.hasError('required')) {
      this.toastr.error('Name is required', 'Error');
    }
    if (this.registerForm.get('email')?.hasError('required')) {
      this.toastr.error('Email is required', 'Error');
    }
    if (this.registerForm.get('email')?.hasError('email')) {
      this.toastr.error('Email must be valid', 'Error');
    }
    if (this.registerForm.get('mdp')?.hasError('required')) {
      this.toastr.error('Password is required', 'Error');
    }
    if (this.registerForm.get('mdp')?.hasError('minlength')) {
      this.toastr.error('Password must be at least 6 characters long.', 'Error');
    }
    if (this.registerForm.get('passConf')?.hasError('required')) {
      this.toastr.error('Password confirmation is required.', 'Error');
    }
    if (this.registerForm.get('tel')?.hasError('required')) {
      this.toastr.error('Phone number is required', 'Error');
    }
    if (this.registerForm.get('tel')?.hasError('pattern')) {
      this.toastr.error('The phone number must be exactly 8 digits long.', 'Error');
    }
    if (this.registerForm.hasError('passwordsDontMatch')) {
      this.toastr.error('Passwords do not match', 'Error');
    }
  }



  private showFormErrors2() {
    if (this.loginForm.get('email')?.hasError('required')) {
      this.toastr.error('Email is required', 'Error');
    }
    if (this.loginForm.get('mdp')?.hasError('required')) {
      this.toastr.error('Password is required', 'Error');
    }
    
    
  }
}
