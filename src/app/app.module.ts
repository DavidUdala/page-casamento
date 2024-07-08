import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/shared/header/header.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BannerComponent } from './componentes/shared/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { CardPresenteComponent } from './componentes/shared/card-presente/card-presente.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalPixComponent } from './componentes/shared/modal-pix/modal-pix.component';


registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    InicioComponent,
    PresentesComponent,
    CardPresenteComponent,
    ModalPixComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
