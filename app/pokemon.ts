export /**
 * Pokemon
 */
class Pokemon {
  constructor(
      private resourceUri:String,
      public name:string, 
      public img:string) {
    
  }
  get ResourceUri() {
      return this.resourceUri;
  }
}