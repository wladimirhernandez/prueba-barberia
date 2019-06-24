import { Component } from '@angular/core';
import { PostService } from './services/post.service'
import { IPost, IComments, IReactions, IPostEmpy } from './services/post.interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-barberia';
  post: IPost[ ];
  comments: IComments[];
  reactions: IReactions;
  selectedPost: IPost;

  currentUser: string = 'Juan';
  
  
  constructor( private _PostService: PostService ){
    this.getPost()
    this.selectedPost = IPostEmpy.empy();
  }

  getPost(){
    this._PostService
    .All()
      .then(
       (res => {
        this.post = res as IPost[];
        })  

    )
    }
  
    addOrEdit() {
      if(this.selectedPost.text.length > 0 ){
        this.selectedPost.user.name = this.currentUser;
        this.post.push(this.selectedPost);
        this.selectedPost = IPostEmpy.empy();
      }else {
        return;
      }
    }

/*
      addOrEditComments() {
        if(this.selectedPost.comments.text.length > 0 ){
          this.selectedPost.comments.user.name = this.currentUser;
          this.selectedPost.comments.push(this.selectedPost.comments);
          this.selectedPost = IPostEmpy.empy();
        }else {
          return;
        }  
    }*/
  
}
