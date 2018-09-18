import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import './Movies.css';

class Movies extends Component {
    constructor (props){
        super(props);
        this.state = {movies: getMovies()}
    }

    handleDelete = (movie) => {
        const newLlst = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: newLlst });
    }
    
  render() {
    return (
    <div>
        <table class="table table-striped">
          <thead className ="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Quantity</th>
              <th scope="col">Raiting</th>
              <th scope="col"></th>
            </tr>
          </thead>
         <tbody>
         {this.state.movies.map(movie => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button 
                    className="btn btn-danger" 
                    onClick={()=>this.handleDelete(movie)}>
                    Del
                </button>
            </td>
            </tr>
         ))}
         </tbody>
        </table>
    </div>
    );
  }
}

export default Movies;