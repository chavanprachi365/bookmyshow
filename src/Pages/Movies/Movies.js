import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Filter } from '../../Components/Filter/Filter';

import { AppliedFilter } from '../../Components/Filter/AppliedFilter';
import { Headingbanner } from '../../Components/Banner/Headingbanner';
import { Mycards } from '../../Components/Cards/Mycards';
import { Button } from '../../Components/Buttons/Button';


const MoviesData = [
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4xLzEwICA0Ni45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00322647-wzhcpchreh-portrait.jpg",
    name: "Bade Miyan Chote Miyan",
    title1: "UA",
    description: "Hindi",
    moviesDetails: {
      rating: 6.4,
      lastDate: "2024-04-30",
      casts: [
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-1681713982.jpg",
          name: "Akshay Kumar",
          profession: ["Actor"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tiger_shroff_37437_27-07-2016_11-49-08.jpg",
          name: "Tiger Shroff",
          profession: ["Actor"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg",
          name: "Prithviraj Sukumaran",
          profession: ["Actor"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sonakshi_sinha_18494_21-07-2016_01-34-34.jpg",
          name: "Sonakshi Sinha",
          profession: ["Actor"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manushi-chhillar-2015213-15-11-2021-04-17-52.jpg",
          name: "Manushi Chhillar",
          profession: ["Actor"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alaya-f-2006134-1672835082.jpg",
          name: "Alaya F",
          profession: ["Actor"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ronit-roy-18087-24-03-2017-12-31-01.jpg",
          name: "Ronit Roy",
          profession: ["Actor"],
        },
      ],
      crewData: [
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ali-abbas-zafar-21198-26-10-2018-11-53-38.jpg",
          name: "Ali Abbas Zafar",
          profession: ["Director", "Producer", "Writer"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vashu-bhagnani-iein004098-24-03-2017-12-54-16.jpg",
          name: "Vashu Bhagnani",
          profession: ["Producer"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jackky-bhagnani-10549-24-03-2017-14-04-58.jpg",
          name: "Jackky Bhagnani",
          profession: ["Producer"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepshikha-deshmukh-1090922-05-03-2018-11-02-09.jpg",
          name: "Deepshikha Deshmukh",
          profession: ["Producer"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/himanshu-kishan-mehra-2033841-1706081400.jpg",
          name: "Himanshu Kishan Mehra",
          profession: ["Producer"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal-mishra-1060511-1709811710.jpg",
          name: "Vishal Mishra",
          profession: ["Musician"],
        },
        {
          imgPath:
            "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bosco-caeser-iein104452-03-08-2017-16-18-23.jpg",
          name: "Bosco Caeser",
          profession: ["Choreographer"],
        },
      ],
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bade-miyan-chote-miyan-et00322647-1706081707.jpg",
      votes: "20.5K",
      description: `When a masked enemy rises within the nation, mercilessly targeting the military by stealing the countrys most dangerous weapon, Colonel Azad sends his best officer to unearth two legendary from his unit for the mission: Brooding Bade Miyan and cocky Chote Miyan.`,
      screens: ["2D", "IMAX 3D", "3D", "IMAX 2D"],
      languages: ["Hindi", "Kannada", "Malayalam", "Telugu", "Tamil"],
      slugInfo: {
        duration: "2h 43m",
        category: ["Action", "Comedy", "Thriler"],
        certification: "UA",
        releaseDate: "11 Apr, 2024",
      },
      bannerImgUrl:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bade-miyan-chote-miyan-et00322647-1706081707.jpg",
    }
  },

  {
    src:"movie2.avif",
    name:"Godzilla x king:\nThe New Empire",
    movieCertificate:"UA",
    language:"hindi,english ,marathi",

  },
  {
    src:"movie3.avif",
    name:"Svatantra  Veer  Savrkar",
    movieCertificate:"UA",
    language:"hindi,marathi",

  },
  {
    src:"movie4.avif",
    name:"Shaithan",
    movieCertificate:"UA",
    language:"hindi",

  },
  {
    src:"movie5.avif",
    name:"Yodha",
    movieCertificate:"UA",
    language:"hindi",

  },
  {
    src:"movie6.avif",
    name:"Madgaon Express",
    movieCertificate:"UA",
    language:"hindi",

  },
  {
    src:"movie7.avif",
    name:"Kung pu Panda 4",
    movieCertificate:"UA",
    language:"hindi",

  },
  {
    src:"movie8.avif",
    name:"The Goat Life",
    movieCertificate:"UA",
    language:"hindi",

  },
]




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
    <section className='bg-light '>
      < Carousel autoPlay interval={5000} infiniteLoop={true} showStatus={false} showThumbs={false} className='p-2' >
        {carouselData.map((value,index)=> {    
          return <div key={index}>  
            <img className='rounded-3 mt-3 '  src={value} alt="" />
          </div>
        }
   )}
         
      </Carousel>
      <div className='container mt-3 '>
        <div className='row'>
          <div className='col-12 col-md-3'>
             <h4>Filters</h4>
                {data.map((value,index) => {
              return <Filter key={index} buttons={value.buttons} title={value.title} />
                 })}
                 <Button title={"Browser  by Cinemas"}/>
                  
      </div>
      <div className="col-12 col-md-9">
        <div>  <AppliedFilter  title={"Movies in aurangabad"} buttons={["hindi","english","marathi"]} /> </div>
         <div><Headingbanner title2={"Explore upcoming movies"} title={"Coming soon"}/></div>
         <div className='row'>
         {MoviesData.map((value,index) => {
                return <div key={index} className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                  <Mycards  src={value.src} name={value.name} title1={value.movieCertificate} title2={value.language}/>
                </div>
              })}


          </div>
         </div>
      </div>


    </div>

   
    </section>
  )
}

