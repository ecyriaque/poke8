import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  template: `
    <div *ngIf="pokemon">
      <h2>{{ pokemon.name }}</h2>
      <img [src]="pokemon.imageUrl" [alt]="pokemon.name">
      <p>Type: {{ pokemon.type }}</p>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
    </div>
  `
})
export class PokemonDetailComponent {
  @Input() pokemon: any;
}
