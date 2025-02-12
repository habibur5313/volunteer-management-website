import React, { useEffect } from "react";
import Banner from "./Banner";
import VolunteerNeedsNow from "./VolunteerNeedsNow";
import Contact from "./ContactUs";
import AboutUs from "./AboutUs";
import Location from "./Location";

const Home = () => {
  useEffect(() => {
    document.title="Home | Volunteer Network"
  },[])
  return (
    <div>
      <Banner></Banner>
     <div className="w-11/12 mx-auto">
     <VolunteerNeedsNow></VolunteerNeedsNow>
      <AboutUs></AboutUs>
      <Location></Location>
      <Contact></Contact>
     </div>
    </div>
  );
};

export default Home;
