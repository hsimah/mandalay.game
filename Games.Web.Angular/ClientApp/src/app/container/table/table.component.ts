import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootStoreState, RootStoreSelectors } from '../../root-store';
import { Player } from '../../models/player';
import { Card } from '../../models/card';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  players$: Observable<Player[]>;
  wildcard$: Observable<Card>;
  winner$: Observable<Player>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.winner$ = this.store$.select(
      RootStoreSelectors.selectGameWinner
    );
    this.players$ = this.store$.select(
      RootStoreSelectors.selectGamePlayers
    );
    this.wildcard$ = this.store$.select(
      RootStoreSelectors.selectGameWildcard
    );
  }

}
