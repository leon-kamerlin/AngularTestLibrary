import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MylibraryModule } from 'mylibrary';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        MylibraryModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
