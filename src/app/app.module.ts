import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FromComponent } from './components/operadores-criacao/from/from.component';
import { OfComponent } from './components/operadores-criacao/of/of.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    SubjectComponent,
    FromComponent,
    OfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
