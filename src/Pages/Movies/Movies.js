import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Filter } from '../../Components/Filter/Filter';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';



const carouselData = ["banner1.avif","banner2.avif","banner3.avif", ]
export const Movies = () => {
  const data = [
    {
      title: "Language",
      buttons: ["Marathi", "Hindi"]
    },
    {
      title: "Genres",
      buttons: ["Drama", "Comedy", "Action", "Adventure", "Family", "Romantic", "Thriller", "Animation", "Crime", "Political", "Supernatural"]
    },
    {
      title: "Formate",
      buttons: ["2D", "3D"]
    }
  ]
  return (
    <section className='bg-light'>
      <Carousel autoPlay interval={5000} infiniteLoop={true} showStatus={false} showThumbs={false} className='p-2' >
        {carouselData.map((value,index)=>{
          return <div key={index}>
            <img className='rounded-3 mt-3 '  src={value} alt="" />
          </div>
        }
   )}
         
      </Carousel>
      <div className='container '>
    <div className='row'>
      <div className='col-12 col-md-3'>
       <h4>Filters</h4>
       {data.map((value) => {
              return <Filter key={value.title} buttons={value.buttons} title={value.title} />
            })}
      </div>
      <div className="col-12 col-md-9">
        <AppliedFilter/>
      </div>

    </div>

   </div>
    </section>
  )
}

