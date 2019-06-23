import { Component } from '@angular/core';
import { PostService } from './services/post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-barberia';

  constructor( private _PostService: PostService ){

  }

  getPost(){
    this._PostService
    .All()
      .then(res => {
        console.log(res)
      })  
  }

}
