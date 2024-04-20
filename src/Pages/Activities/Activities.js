import React from 'react'

import { Filter } from '../../Components/Filter/Filter';

import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Mycards } from '../../Components/Cards/Mycards';
import { Button } from '../../Components/Buttons/Button';

const EventsData = [
  {
    src: "Activities/first.avif",
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    description:"₹ 2500"
  },
  {
    src: "Activities/second.avif",
    name: "Anupam Kher’s  Actor Prepares - Learn Acting ",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description:"₹ 6999 onwards"
  },
  {
    src: "Activities/third.avif",
    name: "OML Comdey Pit Stop",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    description:"₹ 2500"
  },
  {
    src: "Activities/fourth.avif",
    name: "Comdey Error",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Activities/five.avif",
    name: "BMW Joytown 2024",
    title1: "Shanmukhananda Hall: Mumbai.",
    title2: "Stand up Comedy",
    description:"₹ 799 onwards"
  },
  {
    src: "Activities/six.avif",
    name: "Mumbai Indians VS Rajasthan Royals",
    title1: "Dome, NSCI, SVP Stadium, Worli: Mumbai.",
    title2: "Dance",
    description:"₹ 799 onwards"
  },
  {
    src: "Activities/seven.avif",
    
    name: "Gujrat Pologup ",
    title1: "House of Delicacies: Aurangabad",
    title2: "Stand up Comedy",
    description:"₹ 99"
  },
  {
    src: "Activities/eight.avif",
    name: "Kid Rapid Chess Championship (KRPC)",
    title1: "Watch on Zoom.",
    title2: "Education",
    description:"FREE"
  },
  {
    src: "Activities/nine.avif",
    name: "Kid Rapid Chess Championship (KRPC)",
    title1: "Multiple Venues",
    title2: "Stand up Comedy",
    description:"₹ 499 "
  },
  {
    src: "Activities/ten.avif",
    name: "Anupam Kher’s Actor Prepares - Learn Acting",
    title1: "Multiple Venues",
    title2: "Acting",
    description:"₹ 8850"
  }
  
]


export const Activities = () => {
  const data = [
    {
      title:"Date",
       buttons:["Today","Tomorrow","This Weekend"]
       
    },
    
    
    {
      title: "Categories",
      buttons: ["Comdey Show", "Workshops", "Kids", "Musicshows", "Performance"]
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
            <AppliedFilter title={"Events In Sambhajinagar"} buttons={["Gaming",  "Adventure", "Amusement Parks ", "Food and Drinks", "Tourist Attraction"]} />
          </div>
          <div className="row">
            {EventsData.map((value) => {
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

