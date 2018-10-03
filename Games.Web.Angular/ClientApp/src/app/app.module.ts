import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store/root-store.module';
import { CardComponent } from './components/card/card.component';
import { ErrorComponent } from './components/error/error.component';
import { HandComponent } from './components/hand/hand.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TableComponent } from './container/table/table.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { WinnerComponent } from './components/winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    ErrorComponent,
    TableComponent,
    CardComponent,
    WildcardComponent,
    HandComponent,
    InputComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RootStoreModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
