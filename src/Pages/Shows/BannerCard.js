import React from 'react'
import { Link } from 'react-router-dom'

const BannerCard = ({title,description,imgpath,background}) => {
  return (
    <div className='p-3 mx-3 text-white ' style={{width:"50%",background}}>
      <div className="row align-items-center">
        <div className='col-12 col-md-7'>
          <h2 className='mb-2'>{title}</h2>
          <p>{description}</p>
          <Link className='text-white p_h20 text-decoreation-none'>know more</Link>
          <button className='bg-white rounded-1  border-0 mt-4 px-4 d-flex'>Contact us Today</button>
        </div>
        <div className='col-12 col-md-5'>
          <div className='p_banner_card_img_box'>
            <img src={imgpath} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default BannerCard