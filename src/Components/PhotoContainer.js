import React from 'react'
import Photo from './Photo'
import { withRouter } from 'react-router'

const PhotoContainer = props => {
    const results = props.data
    let photos
    if(results.length >0) {
        photos = results.map(photo =>
            <Photo 
                url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
                key={photo.id}
            />)
    } else{
        photos = 'loading'
    }

    return (
    <div className="photo-container">
     <h2>Search Results</h2>
      <ul>
       {photos}
      </ul>
    </div>
    )
    
}
  

export default withRouter(PhotoContainer)