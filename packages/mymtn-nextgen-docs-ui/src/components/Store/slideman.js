import React from 'react'
import PropTypes from 'prop-types'


function SlideMan(props){

       const {media,alt,index} = props
   
        return(
            
            <div className="ioco__carousel-item" key={index}>
                <img src={`${media}.jpg`} alt={alt}  className="ioco__carousel-item--pik"  />
            </div>
        )
    
}


export default SlideMan 



SlideMan.PropTypes = {

   
    media: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}                                  
