import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { AddJuryComponent } from './components/jurys/add/add.jury.component';
import { IndexJuryComponent } from './components/jurys/index/index.jury.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AddSessionComponent} from "./components/sessions/add/add.session.component";
import {IndexSessionComponent} from "./components/sessions/index/index.session.component";
import {ViewSessionComponent} from "./components/sessions/view/view.session.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddJuryComponent,
    IndexJuryComponent,
    AddSessionComponent,
    IndexSessionComponent,
    ViewSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
