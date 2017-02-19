import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeListComponent} from './recipe-list.component'; 

@Component({
	moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe: Recipe;
	recipeId: number;
	
  constructor() { }

  ngOnInit() {
  }

}
