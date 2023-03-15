import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=150`);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }
}
