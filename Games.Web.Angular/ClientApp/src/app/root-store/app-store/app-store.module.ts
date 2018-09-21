import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { appReducer } from './reducers';
import { AppStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('app', appReducer),
    EffectsModule.forFeature([AppStoreEffects])
  ],
  providers: [AppStoreEffects]
})
export class AppStoreModule { }