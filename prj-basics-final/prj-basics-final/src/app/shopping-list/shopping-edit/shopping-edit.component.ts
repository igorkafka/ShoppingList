import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
   @ViewChild('f') slForm: NgForm;
   subscription: Subscription;
   editMode = false;
   editedItemIndex: number;
   editedItem: Ingredient;
  constructor(private slService: ShoppingListService) {

  }
 onAddItem(form: NgForm) {
   const value = form.value;
  const newIngredient = new Ingredient(value.name, value.amount);
  this.slService.addIngredient(newIngredient);
 }
  ngOnInit() {
   this.subscription =  this.slService.startedEditing.subscribe((index: number) => {
     this.editedItemIndex = index;
     this.editMode = true;
     this.editedItem = this.slService.getIngrendient(this.editedItemIndex);
     this.slForm.setValue({
       name: this.editedItem.name,
       amount: this.editedItem.amount
     });
   });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
