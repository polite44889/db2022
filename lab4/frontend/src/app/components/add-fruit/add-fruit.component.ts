import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  fruit: Fruit = {
    fruitNaming: '',
    weight: '',
    country: '',
    category: '',
    price: ''
  };
  submitted = false;
  
  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
  }

  saveFruit(): void {
    const data = {
      fruitNaming: this.fruit.fruitNaming,
      weight:  this.fruit.weight,
      country:  this.fruit.country,
      category:  this.fruit.category,
      price:  this.fruit.price
    };

    this.fruitService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newFruit(): void {
    this.submitted = false;
    this.fruit = {
      fruitNaming: '',
      weight: '',
      country: '',
      category: '',
      price: ''
    };
  }

}
