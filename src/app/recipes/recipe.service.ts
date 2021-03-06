import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel', 
			'A super-tasty Schnitzel', 
			'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
			[
				new Ingredient('Meat', 1),
				new Ingredient('Franch Fries', 20)
			]
		),
		new Recipe(
			'Big Fat Burget', 
			'This is some description',
			'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			]
		),
	];


	setRecipes(recipes: Recipe[]) {
		this.recipes  = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes() {
		return this.recipes.slice();
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);	
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipe(index: number) {
		return this.recipes.slice()[index];
	}

}