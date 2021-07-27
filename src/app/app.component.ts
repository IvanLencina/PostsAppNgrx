import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import AppState from './core/models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PostsAppNgrx';

  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.post.loading);
  }
}
