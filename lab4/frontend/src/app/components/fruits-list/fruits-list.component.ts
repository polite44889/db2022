import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent implements OnInit {

  fruits?: Fruit[];
  currentFruit: Fruit = {};
  currentIndex = -1;
  fruitNaming = '';

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.retrieveFruits();
  }

  retrieveFruits(): void {
    this.fruitService.getAll()
      .subscribe({
        next: (data) => {
          this.fruits = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveFruits();
    this.currentFruit = {};
    this.currentIndex = -1;
  }

  setActiveFruit(fruit: Fruit, index: number): void {
    this.currentFruit = fruit;
    this.currentIndex = index;
  }

  removeAllFruits(): void {
    this.fruitService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchFruit(): void {
    this.currentFruit = {};
    this.currentIndex = -1;

    this.fruitService.findByName(this.fruitNaming)
      .subscribe({
        next: (data) => {
          this.fruits = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
