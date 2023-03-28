import { Component, Input, ElementRef } from '@angular/core';
import { Ipokemon } from "../../pokemon";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent {
  @Input() pokemon: any;
  
}
