import { Ingredient } from './ingredient.model';

export class IngredientGroup {
  
    constructor (
        public name: string,
        public ingredients: Array <Ingredient>
    ){}
    
    public static fromAny(ingredientGroup: any): IngredientGroup {
    if (!ingredientGroup){
        return null;
    }
    return new IngredientGroup(ingredientGroup.name, ingredientGroup.ingredients);
  }
}