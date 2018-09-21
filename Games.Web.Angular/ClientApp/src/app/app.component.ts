import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreState, AppStoreActions, RootStoreSelectors } from './root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.error$ = this.store$.select(
      RootStoreSelectors.selectError
    );

    this.isLoading$ = this.store$.select(
      RootStoreSelectors.selectIsLoading
    );

    this.store$.dispatch(
      new AppStoreActions.RequestCardsAction()
    );
  }
}