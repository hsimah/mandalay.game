import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { AppStoreModule } from './app-store/app-store.module';
import { GameStoreModule } from './game-store/game-store.module';

@NgModule({
  imports: [
    CommonModule,
    AppStoreModule,
    GameStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: []
})
export class RootStoreModule { }
