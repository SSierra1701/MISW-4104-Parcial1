import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { PlantsModule } from './plants/plants.module';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PlantsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
