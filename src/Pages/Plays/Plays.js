import React from 'react'
import { Filter } from '../../Components/Filter/Filter';
import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Mycards } from '../../Components/Cards/Mycards';
import { Button } from '../../Components/Buttons/Button';





const PlaysData = [
    {
      src: "Plays/et00364523-puwhffyfvg-portrait.jpg",
      name: "Jar Tar Chi Gostha",
      title1: "Ameenpur Lake: Hyderabad",
      title2: "Marathi",
      description:"₹ 300 onwards"
    }
   
   
    
  ]
  

export const Plays = () => {
    const data = [
        {
          title:"Date",
           buttons:["Today","Tomorrow","This Weekend"]
           
        },
        {
           
          title: "Language",
          buttons: ["Marathi", "Hindi"]
        },
        
        {
            title: "Geners",
            buttons: ["Drama"]
          },
        {
          title: "More Filter",
          buttons: ["outdoor Events", "Online streaming","Must Attend","Unmissible","Fast Filling","Offers for you"]
        },
        {
          title: "Price",
          buttons: ["Free", "0-500", "500-2000", "Above 2000"]
        }
      ]
  return (
    <section className='bg-light'>
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-3 ps-0">
          <h4>Filters</h4>
          {data.map((value) => {
            return <Filter key={value.title} buttons={value.buttons} title={value.title} />
          })}
          <Button btnType="outline" title={"Browse by Venues"} />
        </div>
        <div className="col-12 col-md-9">
          <div>
            <AppliedFilter title={"Events In Sambhajinagar"} buttons={["Theatre"]} />
          </div>
          <div className="row">
            {PlaysData.map((value) => {
              return <div className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                <Mycards src={value.src} name={value.name} title1={value.title1} title2={value.title2} description={value.description} />
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
  
}
