import React from 'react'
import { MdChevronRight } from "react-icons/md";

export const Headingbanner = ({title,title2}) => {
  return (
    <div className='bg-white shadow-sm  flex-wrap d-flex justify-content-between rounded-3 mt-4 p-4 align-items-center'>
        <h6 className='p_h16'>{title}</h6>
        <h5 className='p-h14 a_redlite_color2 text-normal '>{title2}  <MdChevronRight size={20 } />  </h5>
    </div>
  )
}
