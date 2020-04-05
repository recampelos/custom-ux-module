import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { YauxFormsModule } from './yaux-forms/yaux-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YauxFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
