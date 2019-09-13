import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/core/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public hasResults: boolean = false;
  public searchText: string = "";

  public noResultsText: string = "No Results.";

  @Input()
  public recipyList: Recipe[];

  @Output()
  public selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  public recipyResultList: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  public PerformSearch() {
    if(this.searchText.length > 2){
      this.recipyResultList = this.recipyList.filter(x => x.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));
      this.hasResults = true;

      if(this.searchText === 'get rect'){
        this.noResultsText = 'Stuart!';
      } else {
        this.noResultsText = "No Results.";
      }

    } else {
      this.hasResults = false;
    }
  }

  public SelectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
    console.log(recipe);
    this.noResultsText = "No Results.";
    this.hasResults = false;
    this.searchText = "";
  }

}
