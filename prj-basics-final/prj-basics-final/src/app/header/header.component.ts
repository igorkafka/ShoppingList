import { AuthService } from './../auth/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 @Output() featureselected = new EventEmitter<string>();
 constructor(private dataStorageService: DataStorageService, public authService: AuthService) {
   console.log(this.authService.isAuthenticaded());
 }
 onSaveData() {
   this.dataStorageService.storeRecipe().subscribe((response: Response) => {
     console.log(response);
   });
 }
 onFetchDate() {
   this.dataStorageService.getRecipes();
 }
 onLogout() {
   this.authService.logoout();
 }
}
