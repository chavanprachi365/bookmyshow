import React from 'react'
import "./Mycard.css"
import { useNavigate } from 'react-router-dom'

export const Mycards = ({src ,name,title1,title2,description ,moviesDetails}) => {

  const navigate=useNavigate()
  console.log (moviesDetails)

  const redirectUrlHandler = () => {
    //if we have the moviedetails then only redirect to the movie details page
    if (moviesDetails) {
      navigate("/details", { state: { ...moviesDetails, name } })
    }
  }

  return (
    <div onClick={redirectUrlHandler} >
        <div className='  mt-5'>
            <div  className='a_top_card a_movie_card  a_cursor_pointer'> 
                <img  src={src} alt="" />

            </div>
        </div>
        <div className='a_bottom_card mt-2 '>
          <h5>{name}</h5>
          <h6 className='text-muted p_h14'>{title1}</h6>
          <h5 className='text-muted p_h14'>{title2}</h5>
            <h5 className='p_h10 text-muted'>{description}</h5>
        </div>
    </div>
  )
}
