import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HeaderComponent } from './components/header/header.component';
import { CpfCnpjPipe } from './pipes/cpfCnpj.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './screens/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardContaComponent } from './components/card-conta/card-conta.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroComponent } from './screens/cadastro/cadastro.component';
import { CardUploadComponent } from './components/card-upload/card-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    HeaderComponent,
    HomeComponent,
    CpfCnpjPipe,
    CardContaComponent,
    CadastroComponent,
    CardUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
