import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, GameStoreActions } from '../../root-store';
import { FormControl } from '@angular/forms';
import { GameStoreEffects } from '../../root-store/game-store/effects';
import { Player } from '../../models/player';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  control: FormControl = new FormControl('');

  @Output()
  add = new EventEmitter();

  @Input()
  public set reset(value: boolean) {
    value && this.control.reset();
  }

  constructor(private store$: Store<RootStoreState.State>, private effects$: GameStoreEffects) { }

  ngOnInit() {

  }

  setPlayerCount(playerCount: number) {
    this.store$.dispatch(new GameStoreActions.SetPlayerCountAction({
      playerCount: playerCount
    }))
  }

  startGame() {
    this.store$.dispatch(new GameStoreActions.StartGameAction());
  }

}
