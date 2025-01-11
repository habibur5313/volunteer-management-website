import React, { useEffect } from "react";
import Banner from "./Banner";
import VolunteerNeedsNow from "./VolunteerNeedsNow";
import Contact from "./ContactUs";
import AboutUs from "./AboutUs";

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
      <div className="bg-accent rounded-xl py-20 mt-10">
        <h1 className="text-3xl font-medium md:text-5xl md:font-bold sm:text-3xl sm:font-semibold text-center text-purple-700 max-w-2xl mx-auto">
          "Volunteerism is the voice of the people put into action. These
          actions shape and mold the present into a future of which we can all
          be proud.""
          <p className="mt-4 ">-Helen Dyer</p>
        </h1>
      </div>
      <Contact></Contact>
     </div>
    </div>
  );
};

export default Home;
