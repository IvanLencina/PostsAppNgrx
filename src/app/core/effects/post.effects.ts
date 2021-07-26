import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
        PostActionTypes,
        GetPostsAction,
        GetPostsSuccessAction,
        GetPostsFailAction,
        DeletePostAction,
        DeletePostSuccessAction,
        DeletePostFailAction,
        AddPostAction,
        AddPostSuccessAction,
        AddPostFailAction
     } from '../actions/posts/actions';
import { PostService } from '../services/post/post.service';
import Post from '../models/post-model';

@Injectable()
export class PostEffects {

  @Effect() getPosts$ = this.actions$
    .pipe(
      ofType<GetPostsAction>(PostActionTypes.GET_POSTS),
      mergeMap(
        () => this.service.getAll()
          .pipe(
            map(data => {
                return new GetPostsSuccessAction(data)
            }),
            catchError(error => of(new GetPostsFailAction(error)))
          )
      ),
  )

  @Effect() deletePost$ = this.actions$
    .pipe(
      ofType<DeletePostAction>(PostActionTypes.DELETE_POST),
      mergeMap(
        (data) => this.service.delete(data.payload)
          .pipe(
            map(data2 => {
                return new DeletePostSuccessAction(data.payload)
            }),
            catchError(error => of(new DeletePostFailAction(error)))
          )
      ),
  )

  @Effect() addPost$ = this.actions$
    .pipe(
      ofType<AddPostAction>(PostActionTypes.ADD_POST),
      mergeMap(
        (data) => this.service.add(data.payload)
          .pipe(
            map(data2 => {
                return new AddPostSuccessAction(data.payload)
            }),
            catchError(error => of(new AddPostFailAction(error)))
          )
      ),
  )

  constructor(
    private actions$: Actions,
    private service: PostService
  ) { }
}
