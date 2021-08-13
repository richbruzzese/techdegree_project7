//Dependencies for app
import React, {Component}from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import axios from 'axios';

//Imported components
import apiKey from './config';
import Nav from './Components/Nav'
import Search from './Components/Search'
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import loading from './Images/loading.gif'
import {trees, castles, mountains} from './Components/DefaultNavRoutes'

class App extends Component {
  
  /**
   * Default images state will receive initial fetched data and search data
   * Load state will handle when the loading animation will display
   * searchText assist search method in defining query for search
   */
  state ={
    images: [],
    loading: true,
    searchText:''
  }

  //On mount, run search method with the query 'Dogs'
  componentDidMount(){
    this.search('dogs')
}
    // On update if the search text doesn't match the query then run a new search
    componentDidUpdate( prevProps, prevState ) {
        if( this.props.location.pathname !== prevProps.location.pathname ) {
          this.search(this.props.location.pathname.replace('/search/', ''))
        }
      }

  //Fetch data from Flickr and update the state. Loading state reset to true any time method is called.
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

   // Render method to return the Routes to the page
  render(){
    return (
      
      <BrowserRouter>
      <div className="container">
      <h1>Photo Search</h1>
      
      {/* Search Form */}
      <Search onSearch={this.search}/>

      {/* Nav form */}
      <Nav />

       {/* Photo Container 
      If loading state is true, render load animation otherwise load Route*/}
       {(this.state.loading) ? 
        <img src={loading} alt="Loading"/> :
       (<Switch> 

        {/* Default Routes to render */}
      <Route exact path='/' render={() =>
        <PhotoContainer
       data={this.state.images}/>} 

       />
     <Route path='/trees' render={() =>
        <PhotoContainer data={trees}/>} 

       />
     <Route path='/castles' render={() =>
        <PhotoContainer data={castles}/>}
         />

     <Route path='/mountains' render={() =>
        <PhotoContainer data={mountains}/>}  
       />

       {/* Separate route to handle search query.  Props to manage search passed to PhotoContainer */}
      <Route exact path="/search/:query" 
        render={({match}) => (
          <PhotoContainer 
            data={this.state.images}
            onSearch={this.search}
            searchText={this.state.searchText}
            query={match.params.query}
          />
        )}
      />

      {/* If no routes match, render the NotFound component */}
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


export default withRouter(App)