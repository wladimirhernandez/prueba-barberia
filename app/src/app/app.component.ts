import { Component } from '@angular/core';
import { PostService } from './services/post.service'
import { IPost, IComments, IReactions } from './services/post.interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-barberia';
  post: IPost;
  comments: IComments;
  reactions: IReactions;

  constructor( private _PostService: PostService ){
    this.getPost()
  }

  getPost(){
    this._PostService
    .All()
      .then(
       (res => {
        this.post = res as IPost;
        console.log(res[1])
        })  

    )
    }

}
