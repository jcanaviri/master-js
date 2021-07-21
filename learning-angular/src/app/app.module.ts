import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [AppComponent, VideoGameComponent, ShoesComponent, CoursesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
