import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackmailComponent } from './blackmail/blackmail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GamesComponent } from './games/games.component';
import { ClickerComponent } from './clicker/clicker.component';
import { ShooterComponent } from './shooter/shooter.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackmailComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    GamesComponent,
    ClickerComponent,
    ShooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
