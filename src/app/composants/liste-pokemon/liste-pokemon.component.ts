import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { Ipokemon } from "../../pokemon";


@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styleUrls: ['./liste-pokemon.component.css'],

})
export class ListePokemonComponent implements OnInit{
  public pokemons: any[] = [] ;


  constructor(private _pokemonService: PokemonService){
  }

  ngOnInit(){
    this._pokemonService.getPokemons().subscribe(data => ( this.pokemons= data));
  }

}
