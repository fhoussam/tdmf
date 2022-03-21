import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './comps/main/main.component';
import { ConfigComponent } from './comps/config/config.component';
import { MainService } from './services/main.service';
import { AdvancedDetailsComponent } from './comps/advanced-details/advanced-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfigComponent,
    AdvancedDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
