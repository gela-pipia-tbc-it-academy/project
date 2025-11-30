import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("lebio", "batumela lobio batumidan", "https://i.pinimg.com/236x/ce/31/48/ce3148a050a13225897047eefe9b0bef.jpg"),
    new Recipe("lebio", "batumela lobio batumidan", "https://i.pinimg.com/236x/ce/31/48/ce3148a050a13225897047eefe9b0bef.jpg"),
    new Recipe("lebio", "batumela lobio batumidan", "https://i.pinimg.com/236x/ce/31/48/ce3148a050a13225897047eefe9b0bef.jpg"),
  ]


}
