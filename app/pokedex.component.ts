import { Component, Output } from '@angular/core';

import { PokemonComponent } from "./pokemon.component";
import { Pokemon } from "./pokemon"
import { PokemonService } from "./pokemons.service"

@Component({
  selector: 'pokedex',
  templateUrl: 'app/pokedex.component.html',
  directives: [PokemonComponent],
  providers: [PokemonService]
})
export class PokedexComponent {
  pokemons = [];
  pokemonsFiltered = [];
  isLoading:boolean = false;

  constructor(private pokemonService: PokemonService){
    this.isLoading = true;
    pokemonService.getPokemons().then(p => {
      this.pokemons = p;
      this.isLoading = false;
      this.search();
    });
  }

  search(name:string = ''){
    if (!name) {
      this.pokemonsFiltered = this.pokemons;
    }else{
      var searched = name.toUpperCase();
      this.pokemonsFiltered = this.pokemons.filter(function (el) {
				return el.name.toUpperCase().indexOf(searched) != -1;
			});
    }
  }
}
