import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {


  products = [
    { id:1, name: 'Dumbbell', category: 'Equipment', price: '45.000 DT', imageUrl: 'assets/images/shop/produit1.jpeg',desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.' },
    { id:2,name: 'Gym mat', category: 'Equipment', price: '20.000 DT', imageUrl: 'assets/images/shop/produit2.jpg',desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.' },
    { id:3,name: 'Boxing gloves', category: 'Equipment', price: '58.000 DT', imageUrl: 'assets/images/shop/produit3.jpg' ,desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.'},
    { id:4,name: 'Skipping rope', category: 'Equipment', price: '25.869 DT', imageUrl: 'assets/images/shop/produit4.jpg',desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.' },
    { id:5,name: 'CREATINE Powder', category: 'Workout Supplement', price: '250.425 DT', imageUrl: 'assets/images/shop/produit5.jpg' ,desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.'},
    { id:6,name: 'Fat Burner', category: 'Workout Supplement', price: '180.200 DT', imageUrl: 'assets/images/shop/produit6.jpg' ,desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.'},
    { id:7,name: 'Shaker 1L', category: 'Workout Supplement', price: '34.150 DT', imageUrl: 'assets/images/shop/produit7.jpg',desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.' },
    { id:8,name: 'MultiVitamins', category: 'Workout Supplement', price: '220.000 DT', imageUrl: 'assets/images/shop/produit8.jpg' ,desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.'},
    { id:9,name: 'Garlic Butter Chicken Bites with Lemon Asparagus', category: 'Recipe', price: '25.000 DT', imageUrl: 'assets/images/shop/produit9.jpg',desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.' },
    { id:10,name: 'One Pot Chicken and Vegetables Skillet', category: 'Recipe', price: '18.000 DT', imageUrl: 'assets/images/shop/produit10.jpg' ,desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.'},
    { id:11,name: 'Grilled Salmon with Avocado Salsa', category: 'Recipe', price: '32.000 DT', imageUrl: 'assets/images/shop/produit11.jpg',desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.' },
    { id:12,name: 'Crab Pool Security', category: 'Recipe', price: '12.000 DT', imageUrl: 'assets/images/shop/produit12.jpg',desc:'Ut praesentium amet et voluptatem autem ad minus velit aut consequuntur atque et consectetur velit sed internos quia et unde maxime. Nam earum omnis ea sapiente debitis non maiores suscipit qui rerum quia a neque deserunt et deleniti sint et repellat consequatur. Et voluptatem quia sit laboriosam asperiores est quia officia et voluptatem perspiciatis aut rerum autem. In fugiat nostrum ut maiores deleniti est excepturi laborum.' }
  ];
  product: any;
  productId: string = ''; // Initialisation par défaut
  suggestions = [...this.products];

  constructor(private route: ActivatedRoute,private router: Router) {}

 

  ngOnInit(): void {
    // Écoute des changements de paramètres
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id') || ''; // Récupérer l'ID du produit
      this.product = this.products.find(product => product.id.toString() === this.productId); // Trouver le produit correspondant
      if (this.product) {
        this.suggestions = this.products.filter(prod => prod.category === this.product.category && prod.id !== this.product.id);
      }
    });
  }


  navigateToProduct(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
