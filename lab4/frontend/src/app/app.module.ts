import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFruitComponent } from './components/add-fruit/add-fruit.component';
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFruitComponent,
    FruitDetailsComponent,
    FruitsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
