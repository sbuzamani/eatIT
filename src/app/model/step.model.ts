export class Step {
  static fromAny(fromAny: any): Step[] {
    throw new Error("Method not implemented.");
  }

    constructor (
        public description: string
    ) {}
}