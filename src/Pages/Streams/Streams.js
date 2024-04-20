import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { PromotedBanner } from './PromotedBanner'
import "./Stream.css"
import { MultiMovieCard } from '../../Components/MultiMovie/MultiMovieCard'

const streamData =[
  {
    description: "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",
    language: "hindi",
    movieName: "AAZAM",
    title: "Brand new releases every Friday",
    imgcardpath:"stream/et00343041-lasrumkllk-portrait.jpg",
    path:"url(stream/et00343041-nkkkxczqvw-horizontal_poster_still.jpg)"
  },
  { 
    description: "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",
    language: "hindi,english",
    movieName: "DAVNDAV",
    title: "Brand new releases every Friday",
    imgcardpath:"stream/et00370047-nrhkfmtrue-portrait.jpg",
    path:"url(stream/et00370047-hclumbhhhe-horizontal_poster_still.jpg)"
  },
  {
    description: "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",
    language: "Tamil,english",

    movieName: "The Holdovers",
    title: "Brand new releases every Friday",
    imgcardpath:"stream/photo3.jpg",
    path:"url(stream/banner2.jpg)"
  },
  { 
    description: "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",

    language: "Tamil, english ,hindi",
    
    movieName: "ANYONE BUT YOU",
    title: "Brand new releases every Friday",
    imgcardpath:"stream/photo4.jpg",
    path:"url(stream/banner1.jpg)"
  },
  
]

export const Streams = () => {
  return (
    <section className='a_promoted_banner'>
      <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} className="h-100">
        {streamData.map((value)=>{
          return(<PromotedBanner  description={value.description} language={value.language}  movieName={value.movieName} title={value.title} isPremiere imgcardpath={value.imgcardpath} path={value.path}   />)
          
        }
        )}
        
      </Carousel>
      <div className='container'>
       <MultiMovieCard title={"Preimer Of The Week"} 
         />
      </div>
    

    </section>
  )
}
