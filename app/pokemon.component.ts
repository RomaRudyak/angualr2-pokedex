import { Component,Input } from '@angular/core';
import { PokemonService } from "./pokemons.service";
@Component({
  selector: 'pokemon',
  templateUrl: 'app/pokemon.component.html'
})
export class PokemonComponent { 
  @Input() name: String;
  @Input() img: String = 'img/loading.gif';
}