import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllVolunteerCard = ({ post }) => {
  return (
    <div className=" bg-base-100 shadow-xl">
      <div className="h-full image-full border">
        <figure className="">
          <img className="w-full h-[300px] object-cover" src={post.thumbnailUrl} alt={post?.name} />
        </figure>
        <div className="card-body flex flex-col flex-grow justify-between p-4">
          <div className="">
            <h2 className="text-3xl font-semibold">{post?.postTitle}</h2>
            <p className="text-xl font-medium">Deadline: {post?.Date.split('T')[0]}</p>
          </div>
          <div>
            <p className="text-xl font-medium">Category: {post?.category}</p>
            <p className="text-xl font-medium">Location: {post?.location}</p>
            <p className="text-xl font-medium">Volunteer need: {post?.volunteerNeeded}</p>
          </div>
          <div className="flex justify-end items-end mt-4">
            <Link to={`/volunteerDetails/${post._id}`}>
              <button className="btn btn-accent text-white text-xl font-medium">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerCard;
