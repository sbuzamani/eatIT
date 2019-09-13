import { Ingredient } from './ingredient.model';
import { IngredientGroup } from './ingredient-group.model';
import { Step } from './step.model';

export class Recipe {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public tags: Array<string>,
    public image: string,
    public ingredients: Array<Ingredient>,
    public ingredientGroup: IngredientGroup,
    public steps: Array<Step>,
    public notes: string,
    public forked: string
  ) { }

  public static fromAny(item: any): Recipe {

    if (!item) {
      return;
    }
    return new Recipe(item.id, item.name, item.description, item.tags, item.image, item.ingredients.map(Ingredient.fromAny),
      IngredientGroup.fromAny(item.ingredientGroup), item.steps.map(Step.fromAny), item.notes, item.forked)

          }
}