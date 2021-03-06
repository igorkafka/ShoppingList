import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
startedEditing = new Subject<number>();
 ingredientchange = new Subject<Ingredient[]>();
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientchange.next(this.ingredients.slice());
  }
  getIngrendient(index: number) {
    return this.ingredients[index];
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientchange.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newingredient: Ingredient) {
    this.ingredients[index] = newingredient;
    this.ingredientchange.next(this.ingredients.slice());
  }
  deleteIngrendient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientchange.next(this.ingredients.slice());
  }
}
