import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  movie: Movie = new Movie();
  submitted = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
  }

  newMovie(): void {
    this.submitted = false;
    this.movie = new Movie();
  }

  save() {
    this.movieService.createMovie(this.movie);
    this.movie = new Movie();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
