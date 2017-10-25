import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';

import {MoviesListComponent} from './movie/movies-list/movies-list.component';
import {MovieDetailsComponent} from './movie/movie-details/movie-details.component';
import {CreateMovieComponent} from './movie/create-movie/create-movie.component';

import {MovieService} from './movie/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})

export class AppModule {}
