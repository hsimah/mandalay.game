import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, GameStoreActions } from '../../root-store';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  control: FormControl = new FormControl('');

  @Input()
  playerCount: number;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {

  }

  setPlayerCount(playerCount: number) {
    this.store$.dispatch(new GameStoreActions.SetPlayerCountAction(playerCount));
  }

  startGame() {
    this.store$.dispatch(new GameStoreActions.StartGameAction());
  }

  resetGame() {
    this.store$.dispatch(new GameStoreActions.ResetGameAction());
  }

}
