import axios from 'axios'
import apiKey from '../config'

let trees={}
let castles={}
let mountains ={}

/**
 * Fetch data for default nav elements on page.
 * Export them to App.
 */
axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="trees"&per_page=24&format=json&nojsoncallback=1`)
.then (res =>{
    trees = res.data.photos.photo
})

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="castles"&per_page=24&format=json&nojsoncallback=1`)
.then (res =>{
    castles = res.data.photos.photo
})

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="mountains"&per_page=24&format=json&nojsoncallback=1`)
.then (res =>{
    mountains = res.data.photos.photo
})

export {trees, castles, mountains}