import React from 'react'

const Partners = () => {
    const data=["axis-logo.avif","hp-logo.avif","icici-logo.avif","mastercard-logo.avif","ola-logo.avif"]
  return (
    <div className='container bg-white my-3 py-5 text-center'>
        <h6>OUR PARTNERS</h6>
        <div className="row justify-content-center mt-5">
           {data.map((ele,index) =>{
            return <div key={index } >
              <div>
                <img src={`Corporates/${ele}` } alt="" /> 
              </div>
            </div>
           })}
        </div>
    </div>
  )
}

export default Partners