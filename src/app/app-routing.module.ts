import {CreateMovieComponent} from './movie/create-movie/create-movie.component';
import {MoviesListComponent} from './movie/movies-list/movies-list.component';
 
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 
const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesListComponent},
  {path: 'add', component: CreateMovieComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}
