import React from 'react'
import { useLocation } from 'react-router-dom'

export const Banner = () => {
    const {state} = useLocation()
    
  return (
    <div className='a_movies_details' style={{ 
        backgroundImage: ` url(${state.bannerImgUrl})`,
    }}>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div>
                                <div className='a_img_box'>
                                    <img src={state?.poster} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
