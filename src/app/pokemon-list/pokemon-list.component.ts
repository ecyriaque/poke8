import { Component } from '@angular/core';

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
export class PokemonListComponent {
  pokemonList = [
    {
      name: 'Bulbasaur',
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'Grass/Poison',
      height: '0.7 m',
      weight: '6.9 kg'
    },
    {
      name: 'Charmander',
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      type: 'Fire',
      height: '0.6 m',
      weight: '8.5 kg'
    },
    {
      name: 'Squirtle',
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      type: 'Water',
      height: '0.5 m',
      weight: '9.0 kg'
    }
  ];
  selectedPokemon: any;

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
  }
}
