import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListePokemonComponent } from './composants/liste-pokemon/liste-pokemon.component';
import { DetailPokemonComponent } from './composants/detail-pokemon/detail-pokemon.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListePokemonComponent,
    DetailPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
