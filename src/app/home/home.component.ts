import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
filter: any;
portfolioItems: any;

constructor() {}

  ngOnInit(): void {
    AOS.init();
    const options = {
      strings: ["movement","mindfulness", "motivation"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    };

    new Typed('.typed-words', options);
  }

  
  


}

