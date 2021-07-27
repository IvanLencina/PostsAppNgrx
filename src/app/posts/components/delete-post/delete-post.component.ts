import { DeletePostAction } from './../../../core/actions/posts/actions';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import AppState from 'src/app/core/models/app-state.model';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss'],
})
export class DeletePostComponent implements OnInit {
  @Input()
  index: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  deletePost() {
    this.store.dispatch(new DeletePostAction(this.index));
  }
}
