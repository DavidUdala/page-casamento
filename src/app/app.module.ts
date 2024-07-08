import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/shared/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BannerComponent } from './componentes/shared/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { CardPresenteComponent } from './componentes/shared/card-presente/card-presente.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    InicioComponent,
    PresentesComponent,
    CardPresenteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
