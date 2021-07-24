import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, 
    VideoGameComponent, 
    ShoesComponent, 
    CoursesComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
