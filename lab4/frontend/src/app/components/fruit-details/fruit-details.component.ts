import { Component, Input, OnInit } from '@angular/core';
import { FruitService } from 'src/app/services/fruit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from 'src/app/models/fruit.model';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentFruit: Fruit = {
    fruitNaming: '',
    weight: '',
    country: '',
    category: '',
    price: ''
  };
  
  message = '';

  constructor(
    private fruitService: FruitService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getFruit(this.route.snapshot.params["id"]);
    }
  }

  getFruit(id: string): void {
    this.fruitService.get(id)
      .subscribe({
        next: (data) => {
          this.currentFruit = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  updateFruit(): void {
    this.message = '';

    this.fruitService.update(this.currentFruit.id, this.currentFruit)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Fruit was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteFruit(): void {
    this.fruitService.delete(this.currentFruit.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/fruits']);
        },
        error: (e) => console.error(e)
      });
  }

}
