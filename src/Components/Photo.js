import React from 'react'

// Take props from PhotoContainer and create URL. Return the image with title as alt
const Photo = ({server, id, secret, title}) => {
    let url= `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
    return(
    <li>
        <img src={url} alt={title} />
    </li>
    )
}

export default Photo