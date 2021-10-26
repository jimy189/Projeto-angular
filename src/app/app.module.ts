import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class AppModule { }
