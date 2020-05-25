import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent implements OnInit {
  @Input() heros:any= [];
  @Input() index :number;

  @Output() heroSelected: EventEmitter<number>;
  constructor(  ) { 
    this.heroSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verVillano(){
    this.heroSelected.emit(this.index);
  }

}
