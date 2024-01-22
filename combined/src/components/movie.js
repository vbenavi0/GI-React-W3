import React, { Component } from 'react'
import mSearch from './movieSearch'

export default class movie extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            date: "",
            overview: "",
            poster: "",
        }
    }

    search(text){
      if(text){
      mSearch(text).then(movie =>{
        this.setState({
          title: movie[0].title,
          date: movie[0].release_date,
          overview: movie[0].overview,
          poster: movie[0].poster_path,
      })
      this.render()
      })}
    }


  render() {
    return (
      <div>
        <form onSubmit={()=>{console.log('moveSearch')}}>
          <label>Search for Movie: </label><br></br>
          <input id = 'search' type='text' onChange={()=>{this.search(document.querySelector('#search').value);}}></input>
        </form>
        <h1>
            {this.state.title}
        </h1>
        <img src = {'https://www.themoviedb.org/t/p/w440_and_h660_face'+this.state.poster} alt = {this.state.title}></img>
        <p>{this.state.overview}</p>
        <p>{this.state.date}</p>
      </div>
    )
  }
}
