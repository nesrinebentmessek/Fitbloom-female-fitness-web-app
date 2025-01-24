import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  

  programs: { 
    id: number; 
    name: string; 
    category: string; 
    duration: string; 
    imageUrl: string; 
    description: string 
  }[] = [
    { 
      id: 1, 
      name: 'Yoga for Beginners', 
      category: 'Yoga', 
      duration: '4 weeks', 
      imageUrl: 'assets/images/programs/yoga.jpg', 
      description: 'A gentle introduction to yoga for complete beginners.' 
    },
    { 
      id: 2, 
      name: 'HIIT Advanced', 
      category: 'HIIT', 
      duration: '6 weeks', 
      imageUrl: 'assets/images/programs/hiit1.jpg', 
      description: 'High-Intensity Interval Training for advanced fitness enthusiasts.' 
    },
    { 
      id: 3, 
      name: 'Strength Training Basics', 
      category: 'Strength-training', 
      duration: '8 weeks', 
      imageUrl: 'assets/images/programs/st.jpg', 
      description: 'Learn the fundamentals of strength training with this course.' 
    },
    { 
      id: 4, 
      name: 'Cardio Burnout', 
      category: 'Cardio', 
      duration: '5 weeks', 
      imageUrl: 'assets/images/programs/cr.jpg', 
      description: 'Burn calories and improve heart health with this cardio program.' 
    },
    { 
      id: 5, 
      name: 'Pilates Core Workout', 
      category: 'Yoga', 
      duration: '4 weeks', 
      imageUrl: 'assets/images/programs/pl.jpg', 
      description: 'Strengthen your core with this beginner-friendly Pilates course.' 
    },
    { 
      id: 6, 
      name: 'Power Yoga Challenge', 
      category: 'Yoga', 
      duration: '6 weeks', 
      imageUrl: 'assets/images/programs/yo.jpg', 
      description: 'Take your yoga practice to the next level with Power Yoga.' 
    },
    { 
      id: 7, 
      name: 'HIIT Core Strength', 
      category: 'HIIT', 
      duration: '3 weeks', 
      imageUrl: 'assets/images/programs/hiit2.jpg', 
      description: 'Target your core with this intense HIIT training.' 
    }
  ];
  


  
  selectedCategory: string = 'all';

  setCategory(category: string): void {
    this.selectedCategory = category;
    
  }

  

  
  getFilteredPrograms() {
    if (this.selectedCategory === 'all') {
      return this.programs;
    }
    return this.programs.filter(program => program.category === this.selectedCategory);
  }
}
