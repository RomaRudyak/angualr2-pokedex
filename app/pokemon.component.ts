import { Component,Input } from '@angular/core';
@Component({
  selector: 'pokemon',
  templateUrl: 'app/pokemon.component.html'
})
export class PokemonComponent { 
  @Input() name: String;
  @Input() img: String;
}