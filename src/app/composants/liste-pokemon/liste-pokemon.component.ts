import { style } from '@angular/animations';
import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { Ipokemon } from "../../pokemon";


@Component({
  selector: 'app-liste-pokemon',
  templateUrl: './liste-pokemon.component.html',
  styleUrls: ['./liste-pokemon.component.css'],

})
export class ListePokemonComponent implements OnInit{
  public pokemons: any[] = [] ;
  selectedPokemon: any;

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  constructor(private _pokemonService: PokemonService,private elementRef : ElementRef){
  }

  ngOnInit(){
    this._pokemonService.getPokemons().subscribe(data => ( this.pokemons= data));

  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
