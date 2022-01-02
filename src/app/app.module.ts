import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UvodComponent } from './uvod/uvod.component';
import { VyrobkyComponent } from './vyrobky/vyrobky.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UvodComponent,
    VyrobkyComponent,
    KontaktComponent,
    GalerieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
