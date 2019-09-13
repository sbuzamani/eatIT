export class Step {
  

    constructor (
        public description: string
    ) {}

    public static fromAny(item: any): Step {
      if(!item){
        return null;
      }

      return new Step(item.description)
    }
}