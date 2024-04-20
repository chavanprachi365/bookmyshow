import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="b_top bg-white py-1">
        <div className="container p-1">
          <div className="row w-100 mx-auto justify-content-between align-items-center d-flex">
            <div className="col-12 col-md-7 ">
              <div className="row align-item center">
                <div className="col-12 col-md-3">
                  <div className="logo px-2">
                    <img
                      height={65}
                      src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-9 mt-3">
                  <div className="d-flex align-items-center  gap-1 border rounded-2">
                    <CiSearch className="ms-2" />
                    <input
                      type="text"
                      className=" border-0 w-100  p-1 px-2  "
                      placeholder="search for movies, events, plays,   sports & activities"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="row align-items-center  text-end justify-content-end">
                <div className="col-12 col-md-7 d-flex justify-content-end gap-3 ">
                  <div>
                    <span>Gadana</span> <IoIosArrowDown className="mt-1" />
                  </div>
                  <button className=" b_bg_red_light_color text-white rounded-2 py-1 border-0 px-2">
                    sign in{" "}
                  </button>
                </div>
                <div className="col-12 col-md-2 ">
                  <IoReorderThreeSharp size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b_bottom py-2 border-bottom">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-5">
              <ul className="d-flex gap-3">
                <li>
                  <NavLink to={"/"}>Movies</NavLink>
                </li>
                <li>
                  <NavLink to={"/streams"}>Streams</NavLink>
                </li>
                <li>
                  <NavLink to={"/events"}>Events</NavLink>
                </li>
                <li>
                  <NavLink to={"/plays"}>Plays</NavLink>
                </li>
                <li>
                  <NavLink to={"/sports"}>Sports</NavLink>
                </li>
                <li>
                  <NavLink to={"/activities"}>Activities</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <ul className="d-flex gap-4  ">
                <li>
                  <NavLink to={"/list-your-show"}>
                    <span>ListYourCard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/corporates"}>
                  <span>Corporate</span>
                  </NavLink>
                 
                </li>
                <li>
                  <span>Offers</span>
                </li>
                <li>
                  <span>Gifts Cards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
