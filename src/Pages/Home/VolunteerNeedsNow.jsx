import axios from "axios";
import React, { useEffect, useState } from "react";
import AllVolunteerCard from "../AllVolunteerNeedPost/AllVolunteerCard";
import { Link } from "react-router-dom";

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_server}/volunteerNeedPostSort`)
      .then(({ data }) => {
        setPosts(data);
      });
  }, []);
  return (<div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl mt-10 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
                    Volunteer Needs Now
        </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-4 mt-10">
                                        {posts.map(post => <AllVolunteerCard key={post._id} post={post} ></AllVolunteerCard>)}
                    </div>
                    <div className="flex justify-center mt-10">
                  <Link to={'/allVolunteer'}>  <button className="text-xl font-medium btn btn-accent text-white shadow-2xl">See all</button></Link>
                    </div>
  </div>);
};

export default VolunteerNeedsNow;
