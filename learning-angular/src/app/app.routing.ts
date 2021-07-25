// Import router modules from angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ShoesComponent } from './shoes/shoes.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { CoursesComponent } from './courses/courses.component';
import { ExternComponent } from './extern/extern.component';

// Array of Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'video-game', component: VideoGameComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:username/:followers', component: CoursesComponent },
  { path: 'extern', component: ExternComponent },
  { path: '**', component: HomeComponent },
];

// Export the module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
