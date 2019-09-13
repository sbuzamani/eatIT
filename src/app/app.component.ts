import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './model/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public recipe: Recipe;
  public recipeList: Recipe[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('https://api.myjson.com/bins/17o3sp')
    .subscribe((x: any) => {
      this.recipe = x.recipe.map(Recipe.fromAny)[0];
      this.recipeList = x.recipe.map(Recipe.fromAny);
    });
  }
}
