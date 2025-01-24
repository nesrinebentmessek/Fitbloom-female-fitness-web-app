import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  recipes = [
    {
      id: 1,
      name: 'Granola',
      description: 'Delicious and healthy homemade granola with a perfect blend of sweet and crunchy ingredients.',
      image: 'assets/images/recipes/granola.png',
      ingredients: [
        'Oats',
        'Honey',
        'Pecans',
        'Shredded coconut',
        'Dark chocolate'
      ],
      details: [
        '45 mins',
        '4',
        '300 kcal'
      ],
      category: 'snacks'
    },
    {
      id: 2,
      name: 'Winter Carrot Salad',
      description: 'A refreshing salad featuring grated carrots, nuts, and a zesty lemon dressing.',
      image: 'assets/images/recipes/salade1.png',
      ingredients: [
        'Grated carrots',
        'Walnuts',
        'Fresh parsley',
        'Lemon',
        'Olive oil'
      ],
      details: [
        '20 mins',
        '2',
        '150 kcal'
      ],
      category: 'salad'
    },
    {
      id: 3,
      name: 'Egg Benedict',
      description: 'A classic breakfast recipe with poached eggs, bacon, and creamy hollandaise sauce.',
      image: 'assets/images/recipes/oeuf.png',
      ingredients: [
        'Eggs',
        'English muffin',
        'Bacon',
        'Hollandaise sauce',
        'Butter'
      ],
      details: [
        '30 mins',
        '2',
        '400 kcal'
      ],
      category: 'snacks'
    },
    {
      id: 4,
      name: 'Cabbage Soup',
      description: 'A hearty and warming soup made with fresh cabbage and flavorful vegetables.',
      image: 'assets/images/recipes/cabageSoup.png',
      ingredients: [
        'Cabbage',
        'Tomatoes',
        'Carrots',
        'Onions',
        'Vegetable stock'
      ],
      details: [
        '40 mins',
        '4',
        '120 kcal'
      ],
      category: 'soup'
    },
    {
      id: 5,
      name: 'Pumpkin Soup',
      description: 'A creamy and flavorful soup made with roasted pumpkin and a touch of spice.',
      image: 'assets/images/recipes/PotironSoup.png',
      ingredients: [
        'Pumpkin',
        'Fresh cream',
        'Onions',
        'Garlic',
        'Vegetable stock'
      ],
      details: [
        '35 mins',
        '4',
        '150 kcal'
      ],
      category: 'soup'
    },
    {
      id: 6,
      name: 'Energy Smoothie',
      description: 'A quick and nutritious smoothie packed with fruits and superfoods for a healthy energy boost.',
      image: 'assets/images/recipes/EnergySmoothie.png',
      ingredients: [
        'Banana',
        'Berries',
        'Almond milk',
        'Chia seeds',
        'Honey'
      ],
      details: [
        '10 mins',
        '1',
        '200 kcal'
      ],
      category: 'smoothie'
    }
  ];


  recipe: any;
  recipeId: string = '';
  suggestions: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('id') || '';
      this.recipe = this.recipes.find(recipe => recipe.id.toString() == this.recipeId);
      
      if (this.recipe) {
        this.suggestions = this.recipes.filter(rec => rec.category == this.recipe.category && rec.id != this.recipe.id);
      }
    });
  }

  navigateToRecipe(id: number): void {
    this.router.navigate(['/recipesdetails', id]);
  }



}
