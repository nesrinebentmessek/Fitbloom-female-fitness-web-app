import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  id = localStorage.getItem('id');
  nom = localStorage.getItem('nom');
  prenom = localStorage.getItem('prenom');

  contactForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder,private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      this.authService.sendEmail(this.contactForm.value).subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
          this.toastr.success('Your message has been sent!', 'Success');
          this.contactForm.reset();
        },
        (error) => {
          console.error('Error sending email:', error);
          this.toastr.error('Failed to send your message. Please try again later.', 'Error');
          
        }
      );
    } else {
      this.toastr.error('Please fill out all fields correctly.', 'Error');
     
    }
  }
}
