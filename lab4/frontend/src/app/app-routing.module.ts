import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component';
import { AddFruitComponent } from './components/add-fruit/add-fruit.component';

const routes: Routes = [
  { path: '', redirectTo: 'fruits', pathMatch: 'full' },
  { path: 'fruits', component: FruitsListComponent },
  { path: 'fruits/:id', component: FruitDetailsComponent },
  { path: 'add', component: AddFruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
