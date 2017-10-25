import {Component, OnInit, Input} from '@angular/core';

import {MovieService} from '../movie.service';
import {Movie} from '../movie';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.movieService.updateMovie(this.movie.$key, {active: isActive})
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movie.$key)
  }

}
