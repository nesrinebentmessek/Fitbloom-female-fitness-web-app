import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  logout() {
    localStorage.clear();
   this.router.navigateByUrl('/');
   // alert('Vous êtes déconnecté!');
  }
  

  

}
