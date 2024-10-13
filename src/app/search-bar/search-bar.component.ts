import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
@Input() autos: Auto[] = [];
@Output() selectAutoEvent  = new EventEmitter<Auto>();
result: Auto[]=[];
searchAutoList(text:string) {
  this.result=this.autos.filter
(auto=>auto.make.toUpperCase().includes(text.toUpperCase()))
console.table(this.result)
}

selectAuto(auto:Auto){
  this.selectAutoEvent.emit(auto)
}
}
