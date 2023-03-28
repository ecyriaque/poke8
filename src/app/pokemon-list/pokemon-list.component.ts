import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  selectedPokemon: any;

  filteredPokemonList: any[] = [];
  pokemonTypes: string[] = [];
  selectedType: string = '';
  constructor(public pokemonApiService: PokemonApiService) {}

  
  
  
  ngOnInit() {
    this.pokemonApiService.getAllPokemon().subscribe((data: any) => {
      this.pokemonList = data.results;
      this.filteredPokemonList = this.pokemonList;
      this.pokemonList.forEach((pokemon: any) => {
        this.pokemonApiService.getPokemonDetails(pokemon.url).subscribe((data: any) => {
          pokemon.type = data.types[0].type.name;
          pokemon.imageUrl = data.sprites.front_default;
          pokemon.height = data.height / 10; // Convertir en mètres
          pokemon.weight = data.weight / 10; // Convertir en kilogrammes
          console.log('Pokemon:', pokemon.name, 'Type:', pokemon.type);
          this.pokemonTypes = Array.from(new Set([...this.pokemonTypes, pokemon.type]));
        });
      });
    });
  }


  filterPokemonList() {
    console.log('Filtering by type:', this.selectedType);
    if (this.selectedType) {
      
      this.filteredPokemonList = this.pokemonList.filter((pokemon: any) => pokemon.type === this.selectedType);
      console.log(this.filteredPokemonList);
    
    } else {
      this.filteredPokemonList = this.pokemonList;
    }
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

