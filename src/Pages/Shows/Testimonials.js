import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ImQuotesLeft } from "react-icons/im";

export const Testimonials = () => {
  return (
    <div className="b_testimonials">
      <Carousel>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 position-relative">
                <div className="b_testimonials_qoutes">
                  <ImQuotesLeft size={40} />
                  <p className="text-start">
                    
                    We at Jio MAMI Mumbai Film Festival with Star are proud of
                    our partnership with BMS. They turned around the
                    registration to the festival and the on ground management of
                    delegates at our venues altering visitor experience at the
                    festival which is the cornerstone of engagement at any LIVE
                    event. BMS is an integral part of building MAMI and its
                    growth in the last 6 years. Despite being a huge corporate
                    their commitment to independent institutions in cultural
                    spaces is unflinching. Our gratitude to Ashish Hemrajani and
                    his team at BMS for their faith and support.”
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
