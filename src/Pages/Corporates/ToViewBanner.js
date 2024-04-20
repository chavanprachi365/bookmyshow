import React from 'react'
import { Button } from "../../Components/Buttons/Button";

const ToViewBanner = () => {
    const data =[
        {
            title:"WHAT IN IT FOR YOU",
            heading:"Brand Promotions ",
            desc: `Gifting entertainment is a fun way to push your brand’s message. And
            the ways you can use vouchers are endless.For example, upselling
            celebrity- endorsed products timed with a movie release`,
            btnText:"Promote Your Brand",
            imgPath:"steven-libralon.avif"


        },
        {
            
            heading: <span>Employee Engagement <br /> Recognition & Rewards</span>,
            desc: ` Show your clients and employees some appreciation by gifting them our products.`,
            btnText:"Engage your employees",
            imgPath:"customer-engage.avif"


        },
        {
            
            heading:"Lead Generation ",
            desc: `Get positive referrals, keep existing customers and trigger change management.`,
            btnText:"Improve Leads",
            imgPath:"lead-generation.avif"


        },
        {
            
            heading:"Loylaty ",
            desc: `Keep customers firmly in your corner by rewarding them with promotional vouchers.`,
            btnText:"Retain Your Customer",
        
            imgPath:"loyalty.avif"


        },
        {
            
            heading:"Corporate Gifting ",
            desc: `From stand-up comedy and sporting activities to movies and plays,  we’ve got all the entertainment  worth gifting to your patrons.`,
            btnText:"Explore Solution",
            imgPath:"corporate-gifting.avif"


        }
];
 return data.map(({btnText,desc,title,imgPath,heading} ,index ) =>{
     return(
        <div key={index} className={`row  my-2 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
            <div className='col-12 col-md-6 p-0'>
                <img src={`Corporates/${imgPath}`} alt="" />
            </div>
            <div className='col-12 col-md-6 bg_white p-5 d-flex flex-column justify-content-center'>
                <h6 className='text-secondary'>{title}</h6>
                <h3 className='my-3'>{heading}</h3>
                <p>{desc}</p>
                <div className="w-50 mt-2">
                    <Button  btnType="outline" title={btnText} />
                </div>
            </div>
        </div>
     )
 })
 
}

export default ToViewBanner