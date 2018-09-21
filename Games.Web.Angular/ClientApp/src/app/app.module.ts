import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// import { LoadingComponent } from './loading/loading.component';
// import { ErrorComponent } from './error/error.component';
// import { TableComponent } from './table/table.component';
// import { CardComponent } from './card/card.component';
// import { WildcardComponent } from './wildcard/wildcard.component';
// import { HandComponent } from './hand/hand.component';
// import { InputComponent } from './input/input.component';
// import { WinnerComponent } from './winner/winner.component';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoadingComponent,
    // ErrorComponent,
    // TableComponent,
    // CardComponent,
    // WildcardComponent,
    // HandComponent,
    // InputComponent,
    // WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
