import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  template: `
    <div>
      <h2>Pokédex</h2>
      <ul>
        <li *ngFor="let pokemon of pokemonList" (click)="selectPokemon(pokemon)">
          {{ pokemon.name }}
        </li>
      </ul>
    </div>
    <app-pokemon-detail [pokemon]="selectedPokemon"></app-pokemon-detail>
  `
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  selectedPokemon: any;

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    this.pokemonApiService.getAllPokemon().subscribe((response: any) => {
      this.pokemonList = response.results;
    });
  }

  selectPokemon(pokemon: any) {
    this.pokemonApiService.getPokemonDetails(pokemon.url).subscribe((response: any) => {
      this.selectedPokemon = {
        name: response.name,
        imageUrl: response.sprites.front_default,
        type: response.types[0].type.name,
        height: response.height,
        weight: response.weight
      };
    });
  }
}
