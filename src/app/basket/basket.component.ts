import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products = [
    {
      name: "Dumbbell",
      price: 45.000,
      img: "assets/images/shop/produit1.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      quantity: 0
    },
    {
      name: "CREATINE Powder",
      price: 250.425,
      img: "assets/images/shop/produit5.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      quantity: 0
    },
    {
      name: "One Pot Chicken and Vegetables Skillet",
      price: 18.00,
      img: "assets/images/shop/produit10.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      quantity: 0
    },
    {
      name: "Gym mat",
      price: 20.00,
      img: "assets/images/shop/produit2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      quantity: 0
    }
  ];

  shipping: number = 0;
  subtotal: number = 0;
  taxes: number = 0;
  total: number = 0;

  ngOnInit(): void {
    this.updateTotals();
  }

  addProduct(index: number): void {
    this.products[index].quantity++;
    this.updateTotals();
  }

  subtractProduct(index: number): void {
    if (this.products[index].quantity > 0) {
      this.products[index].quantity--;
    }
    this.updateTotals();
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
    this.updateTotals();
  }

  updateTotals(): void {
    this.subtotal = this.products.reduce((acc, product) => acc + product.price * (product.quantity || 0), 0);
    this.taxes = this.subtotal * 0.06;
    this.shipping = this.subtotal > 0 && this.subtotal < 100 ? 5.0 : 0;
    this.total = this.subtotal + this.taxes + this.shipping;
  }
}
