import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStoreModule } from './app-store/app-store.module';
import { GameStoreModule } from './game-store/game-store.module';

@NgModule({
  imports: [
    CommonModule,
    AppStoreModule,
    GameStoreModule
  ],
  declarations: []
})
export class RootStoreModule { }
