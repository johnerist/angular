import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return [
      'assets/food-1.JPG',
      'assets/food-2.JPG',
      'assets/food-3.JPG',
      'assets/food-4.JPG',
      'assets/food-5.JPG',
      'assets/food-6.JPG',
      'assets/food-7.JPG',
      'assets/food-8.JPG'
    ]
  }
}
