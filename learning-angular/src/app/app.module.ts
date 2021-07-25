import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { ShoesComponent } from './shoes/shoes.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ExternComponent } from './extern/extern.component';

import { CalcPipe } from './pipes/calc.pipe';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent, 
    VideoGameComponent, 
    ShoesComponent, 
    CoursesComponent, 
    HomeComponent, ExternComponent,
    CalcPipe,
    ContactComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
