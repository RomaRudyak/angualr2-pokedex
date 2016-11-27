import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pokemon } from "./pokemon"

@Injectable()
export class PokemonService {
  private pokemonUrl = '/api/v1/sprite/?limit=718&offset=1';  // URL to web api
  private API_HOST = 'http://pokeapi.co';

  constructor(private http: Http) { }

  getPokemons() {
    var url = this.API_HOST + this.pokemonUrl;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        var sprites = response.json().objects;
        var res = sprites
          .map(e => this.createPokemon(e));
          //.sort(this.sortPokemons);
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  // private sortPokemons(a: Pokemon, b: Pokemon) {
  //   return a.Id - b.Id;
  // }

  private createPokemon(sprite) {
    var pokemon = sprite.pokemon;
    var resourceUri = pokemon.resource_uri;
    var img = this.API_HOST + sprite.image;
    return new Pokemon(resourceUri, pokemon.name, img)
  }
}