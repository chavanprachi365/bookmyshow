import React from "react";

export const Menulinks = () => {
  const data = [
    {
      title: "Movies Now Showing in Aurangabad",
      links: [
        "Shaitaan",
        "Yodha",
        "Kung Fu Panda 4",
        "Article 370",
        "Bastar: The Naxal Story",
        "Laapataa Ladies",
        "Unn Sawali",
        "Ole Aale",
        "Trailers Screening Show",
        "Danga",
      ],
    },
    {
      title: "Upcoming Movies in Aurangabad",
      links:[ "Haddhu Ledhuraa", "Arthur The King", "Swatantra Veer Savarkar","Rakshasa Tantra","Dilkush","Bigul","Kaliyugam Pattanamlo","What A Kismat","Jajabara 2.0","Thooth Kaasu"],
    },
  
    
    {
      title: "Movie Updates and Celebrities",
      links: ["Upcoming Movies", "Movies Now Showing", "Movie Celebrities"]
      
    },
    {
      title: "Movies Per Week",
      links: ["Movies Playing Today", "Movies Playing Tomorrow", "Movies Playing This Weekend"]
    },
    {
      title:  "Movies By Genre",
      links: ["Drama Movies", "Comedy Movies", "Adventure Movies","Romantic Movies","Thriller Movies","Action Movies","Crime Movies","Adaptation Movies","Mythological Movies","Political Movies"]
    },
    {
      title: "Upcoming Movies By Genre",
      links:  ["Movies in Drama", "Movies in Thriller", "Movies in Action","Movies in Comedy","Movies in Romantic","Movies in Crime","Movies in Horror","Movies in Adventure","Movies in Suspense","Movies in Historical"]
    },
    {
      title: "Movies By Language",
      links: ["Movies in Hindi", "Movies in Marathi", "Movies in Chattisgarhi","Movies in Khasi","Movies in Tulu","Movies in Portuguese","Movies in Japanese","Movies in Haryanavi","Movies in English","Movies in Assamese"]
    },
  
    {
      title: "Movies Now Showing in Aurangabad",
      links: [
        "Shaitaan",
        "Yodha",
        "Kung Fu Panda 4",
        "Article 370",
        "Bastar: The Naxal Story",
        "Laapataa Ladies",
        "Unn Sawali",
        "Ole Aale",
        "Trailers Screening Show",
        "Danga",
      ],
    },
  ];
  return (
    <section className="p_bg_menu text-muted pb-5">
      <div className="container py-4">
        {data.map((value, index) => {
          return (
            <div key={index} className="  p-1 ">
              <h6 className="p_h12 fw-light text-white p_darklight ">{value.title.toUpperCase()}</h6>
              <div className="  p_h11 fw-normal p_span p-0.3 mt-3 mb-3">
                {value.links.map((ele, index) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        index !== 0
                          ? "border-start border-secondary px-2"
                          : "pe-2"
                      }`}
                    >
                      {ele}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
