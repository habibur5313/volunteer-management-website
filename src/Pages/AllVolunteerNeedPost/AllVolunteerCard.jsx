import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllVolunteerCard = ({ post }) => {
  
  return (
    <div>
      <div className="card bg-base-100 h-[300px]  image-full shadow-xl">
        <figure>
          <img className="w-full " src={post.thumbnailUrl} alt={post?.name} />
        </figure>
        <div className="card-body flex flex-col justify-center">
      
        
          <p className=" flex justify-end text-xl font-medium">
             deadline: {post?.Date.split('T')[0]}
            </p>
            <h2 className="text-3xl font-semibold">
            {post?.postTitle}
          </h2>
         
          <div>           
            <p className=" text-xl font-medium mt-2">
              Category: {post?.category}
            </p>
            <p className=" text-xl font-medium">
             Location: {post?.location}
            </p>
            <p className=" text-xl font-medium">
              Volunteer need: {post?.volunteerNeeded}
            </p>
            <Link
              className="flex justify-end mt-4"
              to={`/volunteerDetails/${post._id}`}
            >
              <button className="btn btn-accent text-white text-xl font-medium">
                view details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerCard;
