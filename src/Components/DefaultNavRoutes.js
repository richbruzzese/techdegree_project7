import axios from 'axios'
import apiKey from '../config'

let cats={}
let dogs={}
let computers ={}


axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="cats"&per_page=24&format=json&nojsoncallback=1`)
.then (res =>{
    cats = res.data.photos.photo
})

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="dogs"&per_page=24&format=json&nojsoncallback=1`)
.then (res =>{
    dogs = res.data.photos.photo
})

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags="computers"&per_page=24&format=json&nojsoncallback=1`)
.then (res =>{
    computers = res.data.photos.photo
})

export {cats, dogs, computers}