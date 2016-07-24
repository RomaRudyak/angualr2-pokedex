export /**
 * Pokemon
 */
class Pokemon {
  constructor(
      private id:number,
      public name:string, 
      public img:string) {
    
  }
  get Id() {
      return this.id;
  }
}