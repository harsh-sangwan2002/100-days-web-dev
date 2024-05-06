import axios from 'axios';
import React, { Component } from 'react'

export default class Movies extends Component {

    constructor() {

        super();
        this.state = {
            hover: '',
            parr: [1],
            currPage: 1,
            movies: []
        }
    }

    // Life Cycle -> constructor -> render -> didMount() -> render -> didUpdate() -> willUnmount()
    async componentDidMount() {

        // Side effect such as api calls are handled in this method
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=352ab5d55074de8f0d188679577ca0f8&language=en-US&page=${this.state.currPage}`);
        const data = res.data;

        this.setState({
            movies: [...data.results],
            favourites: [],
        })
    }

    changeMovies = async () => {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=352ab5d55074de8f0d188679577ca0f8&language=en-US&page=${this.state.currPage}`);
        const data = res.data;

        this.setState({
            movies: [...data.results]
        })
    }

    handleLeft = () => {

        if (this.state.currPage !== 1) {
            this.setState({
                currPage: this.state.currPage - 1
            }, this.changeMovies);
        }
    }

    handleRight = () => {

        let tempArr = [];

        // Updating the page number
        this.state.parr.forEach(page => tempArr.push(page));
        tempArr.push(this.state.parr.length + 1);

        this.setState({
            parr: [...tempArr],
            currPage: this.state.currPage + 1,
        }, this.changeMovies)
    }

    handleClick = (value) => {

        if (this.state.currPage !== value) {

            this.setState({
                currPage: value,
            }, this.changeMovies)
        }
    }

    handleFavourites = (movie) => {

        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");

        if (this.state.favourites.includes(movie.id))
            oldData = oldData.filter(m => m.id !== movie.id)

        else
            oldData.push(movie);

        console.log(oldData);

        localStorage.setItem("movies-app", JSON.stringify(oldData));
        this.handleFavouritesState();
    }

    handleFavouritesState = () => {

        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
        let temp = oldData.map(movie => movie.id);

        this.setState({
            favourites: [...temp]
        })
    }

    render() {

        return (
            <>
                {
                    this.state.movies === '' ?
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> :

                        <div>
                            <h3 className='text-center'><strong>Trending</strong></h3>
                            <div className='movies-list'>
                                {
                                    this.state.movies.map(movieObj => (
                                        <div className="card movies-card" key={movieObj.id} onMouseEnter={() => this.setState({ hover: movieObj.id })} onMouseLeave={() => this.setState({ hover: '' })}>

                                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top movies-img" alt={movieObj.title} />
                                            <h5 className="card-title movies-title">{movieObj.original_title}</h5>

                                            <div className='button-wrapper' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                                                {
                                                    this.state.hover === movieObj.id && <a className='btn btn-primary movies-button' onClick={() => this.handleFavourites(movieObj)}>{this.state.favourites.includes(movieObj.id) ? "Remove From Favourites" : "Add To Favourites"}</a>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link" onClick={this.handleLeft}>Previous</a></li>
                                        {
                                            this.state.parr.map(value => (
                                                <li className="page-item" key={value}><a className="page-link" onClick={() => this.handleClick(value)}>{value}</a></li>
                                            ))
                                        }
                                        <li className="page-item"><a className="page-link" onClick={this.handleRight}>Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                }
            </>
        )
    }
}
