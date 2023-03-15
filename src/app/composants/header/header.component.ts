import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titre: string;
  constructor(){
    this.titre = "BIENVENUE SUR POKE8";
  }

  ngOnInit(){}

}
