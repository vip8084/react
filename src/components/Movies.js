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
    
    handleAdding = () => {
        let newLlst = this.state.movies;
        newLlst.unshift(
            {
                _id: "5b21ca3eeb7f6fbccd40003e",
                title: "New one",
                genre: { _id: "5b21ca3eeb7f6fbccd40003e", name: "Super" },
                numberInStock: 2,
                dailyRentalRate: 4.5,
                publishDate: "2018-01-08T19:04:28.809Z",
                like: true
            }
        );
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
              <td>
                <button 
                    className="btn btn-success" 
                    onClick={this.handleAdding}>
                    Add
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