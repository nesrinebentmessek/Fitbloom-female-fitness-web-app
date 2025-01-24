import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height: number =0; 
  weight: number = 0; 
  age: number = 0; // Âge en années
  sex: string = ''; 
  bmiResult: number | null = null; 
  status: string = ''; 

  // Méthode pour calculer le BMI
  calculateBmi(): void {
    if (this.height > 0 && this.weight > 0) {
      const heightInMeters = this.height / 100; 
      this.bmiResult = +(this.weight / (heightInMeters * heightInMeters)).toFixed(2); 
      
      if (this.bmiResult < 18.5) {
        this.status = 'Underweight';
      } else if (this.bmiResult >= 18.5 && this.bmiResult <= 24.9) {
        this.status = 'Healthy';
      } else if (this.bmiResult >= 25 && this.bmiResult <= 29.9) {
        this.status = 'Overweight';
      } else {
        this.status = 'Obese';
      }
    } else {
      alert('Please enter valid height and weight values!');
    }
  }
}
