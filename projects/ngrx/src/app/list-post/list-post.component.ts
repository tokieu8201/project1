import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Store } from '@ngrx/store';
import { selectAllPosts } from '../state/post.selectors';
import { deletePost, updatePost } from '../state/post.actions';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  posts$: Observable<Post[]>;

  constructor(private store: Store<{ posts: Post[] }>) {
    this.posts$ = this.store.select(selectAllPosts);
  }

  onDeletePost(id: number) {
    this.store.dispatch(deletePost({ id }));
  }

  onSelectPost(post: Post) {
    this.store.dispatch(updatePost({ post }));
  }
}
