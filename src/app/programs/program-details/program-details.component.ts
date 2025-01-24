import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrl: './program-details.component.css'
})
export class ProgramDetailsComponent {

  programs: { 
    id: number; 
    name: string; 
    category: string; 
    duration: string; 
    level: string;                // Difficulty level (Beginner, Intermediate, Advanced)
    benefits: string[];           // List of benefits provided by the program
    equipment: string[];         // List of equipment needed
    instructor: string;           // Instructor's name
    imageUrl: string; 
    videoUrl: string; 
    desc: string 
  }[] = [
    { 
      id: 1, 
      name: 'Yoga for Beginners', 
      category: 'Yoga', 
      duration: '4 weeks', 
      level: 'Beginner', 
      benefits: [
        'Improves flexibility and balance',
        'Enhances mindfulness and relaxation',
        'Boosts overall health and well-being'
      ],
      equipment: [
        'Yoga mat',
        'Comfortable clothing',
        'Water bottle'
      ],
      instructor: 'Jane Doe',
      imageUrl: 'assets/images/programs/yoga.png', 
      videoUrl: 'https://www.youtube.com/embed/3X0hEHop8ec', 
      desc: 'This Yoga for Beginners program is designed for those who are new to yoga or want to build a strong foundation. Over the course of 4 weeks, you will learn the basics of yoga poses, breathing techniques, and mindfulness to help you develop flexibility, strength, and inner peace.'
    },
    { 
      id: 2, 
      name: 'HIIT Advanced', 
      category: 'HIIT', 
      duration: '6 weeks', 
      level: 'Advanced', 
      benefits: [
        'Burns calories quickly',
        'Increases endurance',
        'Enhances muscle strength'
      ],
      equipment: [
        'Workout mat',
        'Dumbbells (optional)',
        'Towel and water bottle'
      ],
      instructor: 'John Smith',
      imageUrl: 'assets/images/programs/hiit.png', 
      videoUrl: 'https://www.youtube.com/embed/zr08J6wB53Y', 
      desc: 'The HIIT Advanced program is for those who have experience with high-intensity interval training. This 6-week course is designed to push your limits with intense cardio and strength exercises, helping you improve endurance, burn fat, and increase overall fitness levels.'
    },
    { 
      id: 3, 
      name: 'Strength Training Basics', 
      category: 'Strength-training', 
      duration: '8 weeks', 
      level: 'Intermediate', 
      benefits: [
        'Builds muscle strength',
        'Improves bone density',
        'Boosts metabolism'
      ],
      equipment: [
        'Access to a gym or weights',
        'Proper workout attire',
        'Notebook for tracking progress'
      ],
      instructor: 'Emily Brown',
      imageUrl: 'assets/images/programs/weights.png', 
      videoUrl: 'https://www.youtube.com/embed/fJRPlJdWitM', 
      desc: 'Strength Training Basics is an 8-week program designed to introduce you to weightlifting and muscle building. The program includes exercises targeting all major muscle groups, focusing on proper form, technique, and gradually increasing strength over time.'
    },
    { 
      id: 4, 
      name: 'Cardio Burnout', 
      category: 'Cardio', 
      duration: '5 weeks', 
      level: 'Intermediate', 
      benefits: [
        'Boosts cardiovascular health',
        'Burns excess fat',
        'Improves stamina and endurance'
      ],
      equipment: [
        'Comfortable running shoes',
        'Heart rate monitor (optional)',
        'Water bottle'
      ],
      instructor: 'Michael Johnson',
      imageUrl: 'assets/images/programs/cardio.png', 
      videoUrl: 'https://www.youtube.com/embed/HLQ0NCN_Z4Q', 
      desc: 'Cardio Burnout is a high-intensity, 5-week program aimed at increasing cardiovascular fitness. It includes various cardio exercises, such as running, jumping, and cycling, designed to boost stamina, burn fat, and enhance heart health.'
    },
    { 
      id: 5, 
      name: 'Pilates Core Workout', 
      category: 'Yoga', 
      duration: '4 weeks', 
      level: 'Beginner', 
      benefits: [
        'Strengthens core muscles',
        'Improves posture and flexibility',
        'Enhances body awareness'
      ],
      equipment: [
        'Mat',
        'Comfortable workout clothing',
        'Water bottle'
      ],
      instructor: 'Sophie Lee',
      imageUrl: 'assets/images/programs/yoga.png', 
      videoUrl: 'https://www.youtube.com/embed/U5LwQW_IQOc', 
      desc: 'The Pilates Core Workout is a 4-week program focused on strengthening the core muscles, improving posture, and enhancing flexibility. Pilates combines controlled movements with deep breathing techniques, providing a full-body workout while focusing on core stability.'
    },
    { 
      id: 6, 
      name: 'Power Yoga Challenge', 
      category: 'Yoga', 
      duration: '6 weeks', 
      level: 'Intermediate', 
      benefits: [
        'Builds strength and endurance',
        'Improves flexibility and balance',
        'Reduces stress'
      ],
      equipment: [
        'Yoga mat',
        'Comfortable attire',
        'Optional: Weights for added resistance'
      ],
      instructor: 'Rachel Green',
      imageUrl: 'assets/images/programs/yoga.png', 
      videoUrl: 'https://www.youtube.com/embed/TpZU3dH9cik', 
      desc: 'Power Yoga Challenge is a 6-week program that combines traditional yoga with power-based movements. It is designed to build strength, endurance, and flexibility. You’ll be challenged with dynamic, full-body poses that will improve your physical and mental stamina.'
    },
    { 
      id: 7, 
      name: 'HIIT Core Strength', 
      category: 'HIIT', 
      duration: '3 weeks', 
      level: 'Advanced', 
      benefits: [
        'Tones and strengthens the core',
        'Improves stability and balance',
        'Increases calorie burn'
      ],
      equipment: [
        'Workout mat',
        'Dumbbells or kettlebells (optional)',
        'Water bottle'
      ],
      instructor: 'David Wilson',
      imageUrl: 'assets/images/programs/hiit.png', 
      videoUrl: 'https://www.youtube.com/embed/r_adSBYTkiU', 
      desc: 'HIIT Core Strength is a 3-week program that targets your core through high-intensity interval training. It includes exercises that improve core strength, stability, and endurance while burning calories and toning muscles.'
    }
  ];
  
  
  
  


  constructor(private route: ActivatedRoute,private router: Router,private sanitizer: DomSanitizer) {}
  program: any;
  programId: string = '';
  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.programId = params.get('id') || '';
      this.program = this.programs.find(program => program.id.toString() === this.programId); 
    
    });

    
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



  
}
