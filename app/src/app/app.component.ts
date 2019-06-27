import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { IPost, IComments, IReactions, IPostEmpy } from './services/post.interface';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-barberia';
  post: IPost[ ];
  comments: IComments;
  reactions: IReactions;
  selectedPost: IPost;
  mForma: FormGroup;
  commentText: string;

  currentUser = 'Juan';


  constructor( private postService: PostService, private formBuilder: FormBuilder) {
    this.getPost();
    this.selectedPost = IPostEmpy.empy();
    this.mForma =  this.generarFormulario();
  }


  generarFormulario() {
    // Estructura de nuestro formulario
    return this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(1)]],
      date: Date.now(),
      user: {
        name: this.currentUser,
         image: ''
      },
    });
  }

  getPost() {
    this.postService
    .All()
      .then(
       (res => {
        this.post = res as IPost[];
        }));
    }

    addOrEdit() {
      if (this.selectedPost.text.length > 0 ) {
        this.selectedPost.user.name = this.currentUser;
        this.post.push(this.selectedPost);
        this.selectedPost = IPostEmpy.empy();
      } else {
        return;
      }
    }

      addOrEditComments(selectedPost: any) {
          this.comments = this.mForma.value;
          this.selectedPost = selectedPost;
          this.selectedPost.comments.push(this.comments);
          this.commentText = '';
          this.selectedPost = IPostEmpy.empy();
    }

}
