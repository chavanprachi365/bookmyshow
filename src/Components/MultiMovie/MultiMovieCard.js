import React from 'react'
import "react-multi-carousel/lib/styles.css";

import { FaChevronRight } from "react-icons/fa";

export const MultiMovieCard = ({title,isShowAll=false ,srcData = [] }) => {
  return (
    <div className='a_movies_carousel my-5'>
    {(title || isShowAll) && <div className='d-flex justify-content-between align-items-center my-2 mx-1'>
        <h4 className='a_h20 ps-3 fw-bold'>{title}</h4>
        {isShowAll && <div className='a_redlite_color2 d-flex align-items-center'>
            <span className='a_cursor_pointer a_h14 '>See All</span>
            <FaChevronRight />
        </div>}
    </div>}
    
    
</div>
  )
}

