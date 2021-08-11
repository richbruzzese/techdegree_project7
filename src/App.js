//Dependencies
import './App.css';
import React, {Component}from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios';

//Components
import apiKey from './config';
import Nav from './Components/Nav'
import Search from './Components/Search'
import PhotoContainer from './Components/PhotoContainer';
import {cats, dogs, computers} from './Components/DefaultNavRoutes'

export default class App extends Component {

  state ={
    images: [],
    loading: true,
    query: 'dogs'
  }
  componentDidMount(){
    this.search('dogs')
  }
  search = (query) =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="${query}"&per_page=24&format=json&nojsoncallback=1`)
    .then (res =>{
      this.setState({
        images: res.data.photos.photo,
        loading: false,
        query: query
      })
    })
  }

  render(){
    return (
      
      <BrowserRouter>
      <div className="container">
      <h1>Photo Search</h1>
      {console.log("Cats Array", cats)}
      {/* Search Form */}
      <Search onSearch={this.search}/>

      {/* Nav form */}
      <Nav />

       {/* Photo Container */}
       {(this.state.loading) ? 
       <p> loading...</p>:
       (<Switch> 
       
        <Route exact path='/' render={() =>
        <PhotoContainer
       data={this.state.images}
        
     />} />
     <Route path='cats' render={() =>
        <PhotoContainer
       
       data={cats}
       
        
     />} />
     <Route path='dogs' render={() =>
        <PhotoContainer
       
       data={dogs}
       
        
     />} />
     <Route path='computers' render={() =>
        <PhotoContainer
       
       data={computers}
       
        
     />} />
       </Switch>)} 
       
     
    </div>
     </BrowserRouter>
    )
  }
}


