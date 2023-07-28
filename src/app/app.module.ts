import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, SettingsComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, FontAwesomeModule],
  providers: []
})
export class AppModule {}
