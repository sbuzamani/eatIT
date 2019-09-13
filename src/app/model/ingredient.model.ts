export class Ingredient {
  
    constructor (
        public name: string,
        public amount: number,
        public unit: string,
    ) {}

public static fromAny(item: any): Ingredient {
    if (!item){
        return null;
    }
    return new Ingredient(item.name, item.amount, item.unit);
}
}