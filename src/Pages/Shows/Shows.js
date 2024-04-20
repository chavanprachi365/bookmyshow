import React from 'react'
import Carousel from './Carousel'
import { ShowsCards } from './ShowsCards';
import "./Carousel.css"
import { Testimonials } from './Testimonials';

function ShowsMainText({ title, desc }) {
  return (
    <div className="text-center">
      <h1 className='fw-bold mb-3'>{title}</h1>
      <p className="w-75 mx-auto a_h18">{desc}</p>
    </div>
  );
}
export const Shows = () => {
  const cardData =[
    {
      imgPath:"shows/card1.avif",
      title:"performance",
    },
    {
      imgPath:"Shows/card2.avif",
      title:"Experience"
    },
    {
      imgPath:"Shows/card3.avif",
      title:"Exposition"
    },
    {
      imgPath:"Shows/card5.avif",
      title:"Parties"
    },
    {
      imgPath:"Shows/card6.avif",
      title:"Sports "
    },
    {
      imgPath:"Shows/card1.avif",
      title:"Confrence"
    }

   
    

  ];
  const cardData2=[
    {
      imgPath:"shows/card22.avif",
      title:"Online sales & marketing",
    },
    {
      imgPath:"shows/card23.avif",
      title:"POIS & RIO",
    },
    {
      imgPath:"shows/card24.avif",
      title:"Pricing",
    },
    {
      imgPath:"shows/card25.avif",
      title:"Food & Beverage stalls and works!",
    },
    {
      imgPath:"shows/card26.avif",
      title:"On ground support & ground Entry",
    },
    {
      imgPath:"shows/card27.avif",
      title:"Reports & Business",
    }
  ]

  return (
    <section className='p_shows'>
      <div className='my-3'>
        <Carousel/>
      </div>
      <div className='bg-white a_show_wrapper'>
        <div className='a_shows_container mx-auto'>
          <ShowsMainText title={"What  You Can Host"}
          desc={"As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."} />
          <div className='row'>
          {cardData.map((card, index) => {
              return <div key={index} className="col-12 col-md-4 mt-4">
                <ShowsCards background="#ECF5FF" {...card} />
              </div>
            })}

          </div>
            <div className='col-12 col-md-5'>
              <button style={{ padding: "12px 90px" }} type="button" className="text-white btn btn-sm ">List your Show</button>
            </div>
        </div>
        <div style={{ marginTop: "150px" }} className='a_shows_container mx-auto '>
          <ShowsMainText title={"What are the Service we offers?"}
            desc={"After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life."}
          />
          <div className='row'>
          {cardData2.map((card, index) => {
              return <div key={index} className="col-12 col-md-4 mt-4">
                <ShowsCards {...card} />
              </div>
            })}
          </div>
          <p className="mx-auto my-3 text-center" style={{ width: "85%" }}>
            Apart form these must haves for any event, we also support a host of other services like SEO for your event, custom pricing for your tickets and this and also this.</p>
            <div className='text-center mt-5'>
            <button style={{padding:" 12px 80px"}} className='bg-danger rounded-3 border text-white btn btn-sm'>List your show</button>
          </div>
           </div>
           <Testimonials/>
           <div style={{width:"50%", background:"url(https://assets-in.bmscdn.com/static/2021/06/security-imag.jpeg)"}} className='mx-auto a_security'>
          <ShowsMainText width={100} title={"Sit back and watch your event come to life"} desc={"Events maybe all fun and games, but we take it seriously. We ensure our customer’s security so that you don’t have to."} />
        </div>
      </div>
    </section>
  )
}
