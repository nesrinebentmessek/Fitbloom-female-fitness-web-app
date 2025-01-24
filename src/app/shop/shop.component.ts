import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products = [
    { id:1, name: 'Dumbbell', category: 'Equipment', price: '45.000 DT', imageUrl: 'assets/images/shop/produit1.jpeg' },
    { id:2,name: 'Gym mat', category: 'Equipment', price: '20.000 DT', imageUrl: 'assets/images/shop/produit2.jpg' },
    { id:3,name: 'Boxing gloves', category: 'Equipment', price: '58.000 DT', imageUrl: 'assets/images/shop/produit3.jpg' },
    { id:4,name: 'Skipping rope', category: 'Equipment', price: '25.869 DT', imageUrl: 'assets/images/shop/produit4.jpg' },
    { id:5,name: 'CREATINE Powder', category: 'Workout Supplement', price: '250.425 DT', imageUrl: 'assets/images/shop/produit5.jpg' },
    { id:6,name: 'Fat Burner', category: 'Workout Supplement', price: '180.200 DT', imageUrl: 'assets/images/shop/produit6.jpg' },
    { id:7,name: 'Shaker 1L', category: 'Workout Supplement', price: '34.150 DT', imageUrl: 'assets/images/shop/produit7.jpg' },
    { id:8,name: 'MultiVitamins', category: 'Workout Supplement', price: '220.000 DT', imageUrl: 'assets/images/shop/produit8.jpg' },
    { id:9,name: 'Garlic Butter Chicken Bites with Lemon Asparagus', category: 'Recipe', price: '25.000 DT', imageUrl: 'assets/images/shop/produit9.jpg' },
    { id:10,name: 'One Pot Chicken and Vegetables Skillet', category: 'Recipe', price: '18.000 DT', imageUrl: 'assets/images/shop/produit10.jpg' },
    { id:11,name: 'Grilled Salmon with Avocado Salsa', category: 'Recipe', price: '32.000 DT', imageUrl: 'assets/images/shop/produit11.jpg' },
    { id:12,name: 'Crab Pool Security', category: 'Recipe', price: '12.000 DT', imageUrl: 'assets/images/shop/produit12.jpg' }
  ];

  filteredProducts = [...this.products];
  displayedProductsCount: number = 0;
 

  constructor() {}

  ngOnInit(): void {
    this.countDisplayedProducts();
    
    
  }
  countDisplayedProducts(): void {
    this.displayedProductsCount = this.products.length;
  }
  onFilterChange(event: Event): void {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    if (selectedCategory==='All'){
      this.filteredProducts = [...this.products];
      this.countDisplayedProducts();
    }
    else{ 
    this.filteredProducts = this.products.filter(product => product.category === selectedCategory);
    this.displayedProductsCount =this.products.filter(product => product.category === selectedCategory).length;}
  }
}
