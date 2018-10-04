import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './reducers';
import { GameStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', gameReducer),
    EffectsModule.forFeature([GameStoreEffects])
  ],
  providers: [GameStoreEffects]
})
export class GameStoreModule { }