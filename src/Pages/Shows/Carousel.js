import React from "react";
import Flickity from "react-flickity-component";
import BannerCard from "./BannerCard";
const flickityOptions = {
  initialIndex: 2,
};

const Carousel = () => {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <BannerCard background='#2B3148' imgpath={"Activities/carousel1.avif"}  title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
      <BannerCard background='#45443F' imgpath={"Activities/coursel2.avif"}  title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
      <BannerCard background='#9E6D4C' imgpath={"Activities/coursel3.avif"}  title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
      <BannerCard background='#385434' imgpath={"Activities/carousel4.avif"}  title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
      <BannerCard background='#516C7A' imgpath={"Activities/cousel5.avif"}  title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"} />
    </Flickity>
  );
};

export default Carousel;
