import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  template: `
    <div id="detail" *ngIf="pokemon">
      <h3>{{ pokemon.name }}</h3>
      <img [src]="pokemon.imageUrl" [alt]="pokemon.name" />
      <div>
        <p><strong>Type:</strong> {{ pokemon.type }}</p>
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
      </div>
    </div>
  `,
  styles: [`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }

    img {
      width: 150px;
      height: 150px;
      margin-bottom: 10px;
    }
  `]
})
export class PokemonDetailComponent {
  @Input() pokemon: any;
}
