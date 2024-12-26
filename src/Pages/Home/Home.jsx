import React, { useEffect } from "react";
import Banner from "./Banner";
import VolunteerNeedsNow from "./VolunteerNeedsNow";
import Contact from "./ContactUs";

const Home = () => {
  useEffect(() => {
    document.title="Error | Volunteer Network"
  },[])
  return (
    <div>
      <Banner></Banner>
      <VolunteerNeedsNow></VolunteerNeedsNow>
      <div className="bg-accent rounded-xl py-20 mt-10">
        <h1 className="text-5xl font-bold text-purple-700 max-w-2xl mx-auto">
          "Volunteerism is the voice of the people put into action. These
          actions shape and mold the present into a future of which we can all
          be proud.""
          <p className="mt-4 ">-Helen Dyer</p>
        </h1>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
