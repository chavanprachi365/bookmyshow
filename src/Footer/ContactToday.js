import React from 'react'
import { GiHut } from "react-icons/gi";

export const ContactToday = () => {
  return (
    <section className='p_bg_background text-white  py-4 '>
      <div className='container h-70 '>
         <div className='row justify-content-between align-items-center'>
            <div className='col-12 col-md-8'>
              <div className='d-flex gap-4 align-items-center'>

              < GiHut size={50}   />
              <h6 className='fw-bold'> List  your show</h6>
              <h6 className='p_h14'>Got a show, event , activity or a great experience? Partner with us & get listed on BookMyShow</h6>
              </div>
            </div>
            <div className='col-12 col-md-3'>
              <button className='p_bg_contact text-white border-0 py-2 px-3 rounded-3 justify-content-end d-flex '>Contact Today</button>
            </div>
            </div>
      </div>
    </section>
  )
}
