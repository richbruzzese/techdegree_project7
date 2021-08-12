//Dependencies
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
import NotFound from './Components/NotFound';
import loading from './Images/loading.gif'
import {cats, dogs, computers} from './Components/DefaultNavRoutes'

export default class App extends Component {

  state ={
    images: [],
    cats:[],
    dogs:[],
    computers: [],
    loading: true,
    searchText:''
  }
  componentDidMount(){
    this.search('dogs')
}

  search = (query) =>{
    this.setState({loading: true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="${query}"&per_page=24&format=json&nojsoncallback=1`)
    .then (res =>{
      this.setState({
        images: res.data.photos.photo,
        loading: false,
        searchText: query
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
        <img src={loading} alt="Loading"/> :
       (<Switch> 

      <Route exact path='/' render={() =>
        
        <PhotoContainer
       data={this.state.images}/>} 

       />
     <Route path='/cats' render={() =>
        <PhotoContainer data={cats}/>} 

       />
     <Route path='/dogs' render={() =>
        <PhotoContainer data={dogs}/>}
         />

     <Route path='/computers' render={() =>
        <PhotoContainer data={computers}/>}  
       />
      <Route exact path="/search/:query" 
        render={({match}) => (
          <PhotoContainer 
            data={this.state.images}
            onSearch={this.search}
            searchText={this.state.query}
            query={match.params.query}
          />
        )}
      />
      <Route 
        render={() => (
          <NotFound />
        )}
      />

       </Switch>)} 
         
    </div>
     </BrowserRouter>
    )
  }
}


