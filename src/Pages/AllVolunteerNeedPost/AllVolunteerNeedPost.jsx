import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllVolunteerCard from "./AllVolunteerCard";

const AllVolunteerNeedPost = () => {
  useEffect(() => {
    document.title = "All Review | Chill Gamer ";
  }, []);
  const {data} = useLoaderData();
  console.log(data);
  
//   const [posts, setPosts] = useState(loaderData);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.map((post) => (
          <AllVolunteerCard key={post._id} post={post}></AllVolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedPost;
