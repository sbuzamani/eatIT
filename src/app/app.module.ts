import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { RecipeComponent } from './features/recipe/recipe.component';
import { RelatedContentComponent } from './features/related-content/related-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RecipeComponent,
    RelatedContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
