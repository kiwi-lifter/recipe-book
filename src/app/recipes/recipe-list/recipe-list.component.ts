import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';


@Component({
	moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	
	recipe = new Recipe('Dummy', 'Dummy', 'https://s-media-cache-ak0.pinimg.com/originals/7d/a4/68/7da46876859879003d27b0118dab8b0b.jpg');
	
	constructor() { }

	ngOnInit() {
	}
	
	onSelected(recipe: Recipe){
		this.recipeSelected.emit(recipe);
	}

}
