import { bootstrap }    from '@angular/platform-browser-dynamic';
import { PokedexComponent } from './pokedex.component';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(PokedexComponent, [
    HTTP_PROVIDERS
]);