import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pokemon } from "./pokemon"

@Injectable()
export class PokemonService {
  private pokemonUrl = 'api/v1/pokedex/1/';  // URL to web api
  private API_HOST = 'http://pokeapi.co/';
  private MAX_POKEMON_COUNT = 718;

  constructor(private http: Http) { }
  
  getPokemons() {  
      var url = this.API_HOST + this.pokemonUrl;
      return this.http.get(url)
            .toPromise()
            .then(response => {
                var ps = response.json().pokemon;
                var res = ps
                        .map(e => this.createPokemon(e))
                        .sort(this.sortPokemons);
                if (res.length > this.MAX_POKEMON_COUNT) {
                        res.length = this.MAX_POKEMON_COUNT;
                    }
                    return res;
                })
            .catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private sortPokemons(a:Pokemon, b:Pokemon) {
    return a.Id - b.Id;
  }

  private createPokemon(pJson){
    var resourceUri = pJson.resource_uri;
	var id:number = resourceUri.match(/(\d+)\/$/)[1];
    var img = this.API_HOST  + `media/img/${id}.png`;
    return new Pokemon(id, pJson.name, img)
  }
}