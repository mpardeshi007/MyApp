import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';

import {MovieService} from '../movie.service';
import {Movie} from '../movie';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: FirebaseListObservable<Movie[]>;
  
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.getMoviesList();
  }
  
  deleteMovies() {
    this.movieService.deleteAll()
  }
}
