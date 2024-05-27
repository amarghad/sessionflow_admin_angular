import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddJuryComponent} from "./components/jurys/add/add.jury.component";
import {IndexJuryComponent} from "./components/jurys/index/index.jury.component";
import {AddSessionComponent} from "./components/sessions/add/add.session.component";
import {IndexSessionComponent} from "./components/sessions/index/index.session.component";
import {ViewSessionComponent} from "./components/sessions/view/view.session.component";

const routes: Routes = [
  { path: 'jury', component: IndexJuryComponent },
  { path: 'jury/add', component: AddJuryComponent },
  { path: 'sessions', component: IndexSessionComponent },
  { path: 'sessions/add', component: AddSessionComponent },
  { path: 'sessions/:id', component: ViewSessionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
