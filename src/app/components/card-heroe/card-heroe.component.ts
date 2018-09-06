import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html'
})
export class CardHeroeComponent implements OnInit {

  @Input()
  heroe:Heroe;

  @Input()
  index:number;

  @Output()
  selectedHeroe: EventEmitter<number>;

  constructor(private router:Router) {

    this.selectedHeroe = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  showHeroe(){
    // this.router.navigate(["/heroe", this.index]);
    this.selectedHeroe.emit( this.index );
  }

}
