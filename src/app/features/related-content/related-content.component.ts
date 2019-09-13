import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-related-content',
  templateUrl: './related-content.component.html',
  styleUrls: ['./related-content.component.sass']
})
export class RelatedContentComponent implements OnInit {
@Input()
public relatedContentList: Array<Recipe>

@Output()
public selectedRelatedContent = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }

  public clickRelatedItem(recipe: Recipe){
    this.selectedRelatedContent.emit(recipe)
  }

}
