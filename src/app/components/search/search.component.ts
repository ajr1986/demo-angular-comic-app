import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[];
  phrase:string;

  constructor( private heroesService:HeroesService,
               private activateRouter:ActivatedRoute,
               private router:Router) {

  }

  ngOnInit() {

    this.activateRouter.params.subscribe( params => {
      this.phrase = params["phrase"];
      this.heroes = this.heroesService.search(params["phrase"]);
    })
  }

  showHeroe(idx:number){
    this.router.navigate(["/heroe", idx]);
  }
}
