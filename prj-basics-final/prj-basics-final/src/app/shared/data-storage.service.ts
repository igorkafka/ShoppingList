import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authservice: AuthService) {

  }
  storeRecipe() {
    const tk = this.authservice.token;
   return this.http.put('https://ng-recipe-book-c33b9.firebaseio.com/recipes.json?auth=' + tk, this.recipeService.getRecipes());
  }
  getRecipes()  {
    const tk = this.authservice.token;
    return this.http.get('https://ng-recipe-book-c33b9.firebaseio.com/recipes.json?auth=' + tk).subscribe(
      (response: Response) => {
          const recipes = response.json();
          this.recipeService.setRecipes(recipes);
      }
  );
  }
}
