import React from "react";
import "./Footer.css";
import { Navigation } from "./Navigation";
import { Description } from "./Description";
import { ContactToday } from "./ContactToday";
import { Services } from "./Services";
import { Menulinks } from "./Menulinks";
import { Sociallink } from "./Sociallink";

export const Footer = () => {
  return (
    <footer>
      <Navigation />
      <Description />
      <ContactToday />
      <Services />
      <Menulinks />
      <Sociallink />
    </footer>
  );
};
