import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

  constructor() {}

  ngOnInit(): void {}

  onShoppingListAdd(data: { nameInput: string; amountInput: number }) {
    this.ingredients.push(new Ingredient(data.nameInput, data.amountInput));
  }
}