import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-siblins-comm';
  keyword="";
  send(keyword:string){
      this.keyword=keyword;
  }
}
