import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlackmailComponent } from './blackmail/blackmail.component';

const routes: Routes = [
  { path: '', component: AppComponent },        // default route
  { path: 'about', component: BlackmailComponent },  // /about route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
