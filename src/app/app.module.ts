import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatListModule } from "@angular/material/list";
import { MatChipsModule } from "@angular/material/chips";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundService } from './api/background.service';
import { GalleryComponent } from './page/gallery/gallery.component';
import { LandingComponent } from './page/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [BackgroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
