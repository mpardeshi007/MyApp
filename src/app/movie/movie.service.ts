import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Movie} from './movie';

@Injectable()
export class MovieService {

  private dbPath: string = '/movies';

  movie: FirebaseObjectObservable<Movie> = null;
  movies: FirebaseListObservable<Movie[]> = null;

  constructor(private db: AngularFireDatabase) {}

  getMovie(key: string): FirebaseObjectObservable<Movie> {
    this.movie = this.db.object(`${this.dbPath}/${key}`);
    return this.movie;
  }

  createMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  updateMovie(key: string, value: any): void {
    this.movies.update(key, value);
  }

  deleteMovie(key: string): void {
    this.movies.remove(key);
  }

  getMoviesList(query = {}): FirebaseListObservable<Movie[]> {
    this.movies = this.db.list(this.dbPath, {
      query: query
    });
    return this.movies;
  }

  deleteAll(): void {
    this.movies.remove();
  }

  private handleError(error) {
    console.log(error);
  }
}
