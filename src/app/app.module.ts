import { PostEffects } from './core/effects/post.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { PostsReducer } from './core/reducers/posts/reducer';
import { PostsComponent } from './posts/components/posts/posts.component';
import { DeletePostComponent } from './posts/components/delete-post/delete-post.component';
import { AddPostComponent } from './posts/components/add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DeletePostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      post: PostsReducer
    }, {}),
    EffectsModule.forRoot([
      PostEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
