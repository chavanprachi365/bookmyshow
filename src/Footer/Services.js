import React from 'react'
import { LiaUserAstronautSolid } from "react-icons/lia";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";

export const Services = () => {
  const data=[

    {
      icon:<LiaUserAstronautSolid size={60} />,
      title: "24/7 CUSTOMER CARE"
    },
    {
      icon:<GiTicket size={60} />,
      title: "24/7 CUSTOMER CARE"
    },
    {
      icon:<FaEnvelopeOpenText size={50} className='mb-2' />,
      title: "24/7 CUSTOMER CARE"
    },
  ]
  return (
    <section className='p_bg_service py-3'>
      <div className='container text-muted p_h13'>
        <div className='row'>
        {data.map((value, index, arr) => {
            return <div key={index} className="col-12 col-md-4 text-center a_opacity">
              {value.icon}
              <p className='a_h11 roboto-light mt-3 align-items-center'>{value.title}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
