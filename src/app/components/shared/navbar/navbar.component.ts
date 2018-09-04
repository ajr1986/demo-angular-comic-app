import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private heroesService:HeroesService,
               private router:Router ) {

  }

  ngOnInit() {
  }

  search(phrase:string){
    console.log(phrase);
    this.router.navigate(["/search", phrase]);
  }
}
