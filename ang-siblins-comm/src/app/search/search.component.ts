import { outputAst } from '@angular/compiler';
import { Component,EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() emitter:EventEmitter<string>=new EventEmitter();
  emit(keyword:string){
      this.emitter.emit(keyword);
  }

}
