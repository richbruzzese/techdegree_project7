import React from 'react'
import img from '../Images/koda-sad.png'

const NoResults = () =>{
    return(
        <div className="photo-container">
            <h2>No Results Found</h2>
                <p>
                    Refine your search and try again
                </p>
                <img src={img} alt="No Results"/>
        </div>
    )
}

export default NoResults