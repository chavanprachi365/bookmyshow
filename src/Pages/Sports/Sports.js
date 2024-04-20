import React from "react";
import { Filter } from "../../Components/Filter/Filter";

import { AppliedFilter } from "../../Components/Filter/AppliedFilter";
import { Mycards } from "../../Components/Cards/Mycards";
import { Button } from "../../Components/Buttons/Button";

const SportsData = [
  {
    src: "Sports/et00342542-zqtwcjwpfs-portrait.jpg",
    name: "Run For Equality -Get Medal by Courier",
    title1: "Your Place and your time...",
    title2: "5k",
    description: "₹ 390",
  },
  {
    src: "Sports/et00354770-feyztbfqms-portrait.jpg",
    name: "Indian  Premier League All Matches ",
    title1: "Multi Venues",
    title2: "T20",
    description: "₹ 699 onwards",
  },
  {
    src: "Sports/et00369062-uankacqvsk-portrait.jpg",
    name: "Mumbai City FC-ISL season 2023/24",
    title1: "Multi venues",
    title2: "Football",
    description: "₹ 250",
  },
  {
    src: "Sports/et00370015-mktpmlclmt-portrait.jpg",
    name: "ISL Seasons 2023-24-CHENNAIYIN FC(...",
    title1: "Football",
    title2: "multi venues",
    description: "150 onwards",
  },
  {
    src: "Sports/et00385107-pdbsgpmdcs-portrait.jpg",
    name: "Mumbai City FC vs Odhisha FC ",
    title1: "Mumbai Football Arena..",
    title2: "Football",
    description: "₹ 199 onwards",
  },
  {
    src: "Sports/et00388586-rsphdpsusv-portrait.jpg",
    name: "Mumbai Indians VS Rajasthan Royals",
    title1: "Dome, NSCI, SVP Stadium, Worli: Mumbai.",
    title2: "Dance",
    description: "₹ 799 onwards",
  },
  {
    src: "Sports/et00390974-qvlxryrrja-portrait.jpg",
    name: "Lucknow Super Giants vs Gujrat Titans ",
    title1: "BRSABAV Ekana Cricket..",
    title2: "Chess",
    description: "₹ 399",
  },
  {
    src: "Sports/et00391737-cyggexmnae-portrait.jpg",
    name: "All Indian Quick Chess Championship by..",
    title1: "Your Place and Your Time..",
    title2: "Education",
    description: "FREE",
  },
  {
    src: "Sports/et00392723-pvuunsvdnn-portrait.jpg",
    name: "Rajsthan Royals vs Gujrat Titans",
    title1: "sawai Mansingh Stadium..",
    title2: "t20",
    description: "₹ 499 ",
  },
  {
    src: "Sports/et00393149-zsguaqmeel-portrait.jpg",
    name: "All Indians Biltz Chess Championship by..",
    title1: "Your place and your time..",
    title2: "Chess",
    description: "₹ 8850",
  },
  {
    src: "Sports/et00393150-sxlxgqhmph-portrait.jpg",
    name: "Monthly Chess Challenge by Malsar.in",
    title1: "Watch on Zoom.",
    title2: "Chess",
    description: "FREE",
  },
];
export const Sports = () => {
  const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomorrow", "This Weekend"],
    },

    {
      title: "Categories",
      buttons: [
        "Comdey Show",
        "Workshops",
        "Kids",
        "Musicshows",
        "Performance",
      ],
    },
    {
      title: "More Filter",
      buttons: [
        "outdoor Events",
        "Online streaming",
        "Must Attend",
        "Unmissible",
        "Fast Filling",
        "Offers for you",
      ],
    },
    {
      title: "Price",
      buttons: ["Free", "0-500", "500-2000", "Above 2000"],
    },
  ];
  return (
    <section className="a-sports">
      <div className="a_top py-2">
        <div className="container">
          <div className="w-100">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1711450553059_mcfcislweb2.jpg"
              className="rounded-3"
              width={"100%"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="a_bottom">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-3 ps-0">
              <h4>Filters</h4>
              {data.map((value) => {
                return (
                  <Filter
                    key={value.title}
                    buttons={value.buttons}
                    title={value.title}
                  />
                );
              })}
              <Button btnType="outline" title={"Browse by Venues"} />
            </div>
            <div className="col-12 col-md-9">
              <div>
                <AppliedFilter
                  title={"Events In Sambhajinagar"}
                  buttons={["Cricket", "Chess", "Football", "Running", "Polo"]}
                />
              </div>
              <div className="row">
                {SportsData.map((value) => {
                  return (
                    <div className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                      <Mycards
                        src={value.src}
                        name={value.name}
                        title1={value.title1}
                        title2={value.title2}
                        description={value.description}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
