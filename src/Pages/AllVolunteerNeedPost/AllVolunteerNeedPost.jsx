import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllVolunteerCard from "./AllVolunteerCard";
import axios from "axios";

const AllVolunteerNeedPost = () => {
  useEffect(() => {
    document.title = "All Review | Chill Gamer ";
  }, []);
  const {data} = useLoaderData();
  const [posts,setPosts] = useState(data)
  const [search,setSearch] = useState('')
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_server}/search?search=${search}`)
    .then(({data}) => {
      setPosts(data)
    })
  },[search])
  return (
    <div>
     <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto">
     <input type="search" name="search"  onChange={e => setSearch(e.target.value)}
              value={search} placeholder="search by title" className="input input-bordered h-14 w-full" id="" />
     </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {posts.map((post) => (
          <AllVolunteerCard key={post._id} post={post}></AllVolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedPost;
