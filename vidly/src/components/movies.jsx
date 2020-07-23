import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log("Deleted " + movie._id + " " + movie.title);
    deleteMovie(movie._id);
    this.setState({ movies: getMovies() });
  };

  renderMovies() {
    if (this.state.movies.length === 0) return <h1>There are no Movies</h1>;

    return (
      <div className="table">
        <h1>{"There Are " + this.state.movies.length + " Movies"}</h1>
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th scope="col">{movie.title}</th>
                <th scope="col">{movie.genre.name}</th>
                <th scope="col">{movie.numberInStock}</th>
                <th scope="col">{movie.dailyRentalRate}</th>
                <th scope="col">
                  <button
                    onClick={() => this.handleDelete(movie)}
                    id={movie.id}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return this.renderMovies();
  }
}

export default Movies;
