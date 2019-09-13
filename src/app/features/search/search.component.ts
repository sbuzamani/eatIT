import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public hasResults: boolean = false;
  public searchText: string = "";

  constructor() { }

  ngOnInit() {
  }

  public PerformSearch() {
    if(this.searchText.length > 3){
      //TODO search service here.
      this.hasResults = true;
    }

  }

}
