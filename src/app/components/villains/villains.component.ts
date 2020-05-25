import { Component, OnInit } from '@angular/core';
import { HeroService,Hero } from '../../service/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styles: [
  ]
})
export class VillainsComponent implements OnInit {
  
  // hero:any[]=[];
  hero:Hero[]=[];
  constructor( private _heroService: HeroService, private _router: Router) { 
  }

  ngOnInit(): void {
    this.hero = this._heroService.getHeros();
    console.log(this.hero);
  }
  
  verVillano(id:number){
    this._router.navigate(['/detalles',id]);
  }


}
