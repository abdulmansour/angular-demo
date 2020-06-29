import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //list of pre-defined heros located in src/app/mock-heroes.ts
  heroes:Hero[];

  //inject the heroService via constructor
  constructor(private heroService: HeroService) { 
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  //initialize heroes list via the getHeroes method from HeroService - async without blockage - simulates a real api GET call from remote server
  getHeroes():void {
    this.heroService.getHeroes().subscribe(HEROES => this.heroes = HEROES);
  }


}
