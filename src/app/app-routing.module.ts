import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlackmailComponent } from './blackmail/blackmail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GamesComponent } from './games/games.component';
import { ClickerComponent } from './clicker/clicker.component';
import { ShooterComponent } from './shooter/shooter.component';
const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'Gallery', component: GalleryComponent},        
  { path: 'BlackMail', component: BlackmailComponent }, 
  { path: 'Games', component:GamesComponent}, 
  { path: 'Clicker', component:ClickerComponent},
  { path: 'Shooter', component:ShooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
