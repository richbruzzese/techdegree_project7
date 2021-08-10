import './App.css';

import React, {Component}from 'react';
import {
  BrowserRouter,
  Route,
  Router,
  Switch
} from 'react-router-dom'
import axios from 'axios';

import apiKey from './config';
import Nav from './Components/Nav'
import Search from './Components/Search'
import Photo from './Components/Photo'
export default class App extends Component {

  state ={
    images: [],
    loading: true
  }
  componentDidMount(){
    this.search()
  }
  search = (query = 'dog') =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="${query}"&per_page=24&format=json&nojsoncallback=1`)
    .then (res =>{
      console.log('data', res.data.photos.photo)
      this.setState({
        photos: res.data.photos.photo
      })
    })
  }
  render(){
    return (
    <div className="container">
      {/* Search Form */}
      <Search />
      {/* Nav form */}
      <Nav />
       {/* Photo Container */}
     <Photo />
    </div>
    )
  }
}


