import React, {Component} from 'react'
import Photo from './Photo'
import NoResults from './NoResults'

class PhotoContainer extends Component {

    componentDidUpdate(){
        if(this.props.searchText !== this.props.query){
            this.props.onSearch(this.props.query)
        }
    }

    render(){
        const results = this.props.data
            let photos
            if(results.length >0) {
            photos = results.map(photo =>
                <Photo 
                    server={photo.server}
                    id={photo.id}
                    secret={photo.secret}
                    alt={photo.title}
                    key={photo.id}
                />)
                } else{
                    return (<NoResults />)
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
}
  

export default PhotoContainer