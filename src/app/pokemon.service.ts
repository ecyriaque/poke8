import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Ipokemon } from "./pokemon";

@Injectable({
    providedIn: "root"
})

export class PokemonService {
    private _url: string= "/assets/data/pokemon.json";

    constructor(private http:HttpClient){}

    getPokemons(): Observable<Ipokemon[]> {
        return this.http.get<Ipokemon[]>(this._url);
    }

    getPokemonDetails(id: number) {
        return this.http.get<any>(this._url);
    }
      
}