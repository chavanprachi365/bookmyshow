import React from 'react'
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";


function AppInput({ label, placeholder, type = "text" }) {
  return (
      <div className='mb-3'>
          <label htmlFor="name" className='a_h12'><span className='text-danger'>*</span>{label}</label> <br />
          <input type={type} style={{ padding: "6px 10px" }} className='border rounded-1 w-100' placeholder={placeholder} />
      </div>
  )
}
const Banner = () => {
  return (
    <div style={{background:" url(https://assets-in.bmscdn.com/webin/corporate/corp-banner-bg.jpg)" }} className='position-relative '>
      <div className='h-100 w-100 position-absolute top-0 left-0' style={{ background: "rgba(0,0,0,0.7)", zIndex: 1 }}></div> 
         <div className='container position-relative' style={{zIndex:2}}>
          <div className='row text-white'>
            <div className='col-12 col-md-7 mt-5 text-center '>
              <h1>Entertainment you can gift</h1>
              <p className='my-3 a_h19'>A variety of solutions to skyrocket your business with vouchers,<br /> promotions, loyalty, employee recognition & rewards.</p>
              <div style={{width:"55%"}} className= 'd-flex justify-content-center mx-auto mt-4 justify-content-between align-items-center'>
                <div className='d-flex justify-content-between gap-5'>
                  <div className='d-flex gap-1  '>
                  <MdOutlineSlowMotionVideo size={22} />
                    <h5>Watch Movies</h5>
                  </div>
                  <div className=' d-flex gap-1 '>
                  <MdOutlineFileDownload size={22} />
                  <h5>Download Brochure</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-5'>
              <form action="" className='bg-white rounded-1 mx-auto w-75 m-5 p-4 text-dark '>
                           <AppInput label={"Full Name"} placeholder={"Name"} />
                            <AppInput label={'Company Email'} placeholder={"Company Email"} type="email" />
                            <AppInput label={'Company Name'} placeholder={"Company Name"} />
                            <AppInput label={'Mobile Number'} type="number" placeholder={"eg. 738713XXXX"} />
                            <button className='btn btn-secondary w-100 py-3 mt-2'>Received a Callback</button>
              </form>
            </div>

          </div>
         </div>

    </div>
  )
}

export default Banner