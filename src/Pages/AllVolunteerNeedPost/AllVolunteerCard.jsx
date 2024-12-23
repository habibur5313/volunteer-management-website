import React from "react";
import { Link } from "react-router-dom";

const AllVolunteerCard = ({ post}) => {
  return (
   <div>
    <div className="card bg-base-100 h-[300px]  image-full shadow-xl">
      <figure>
        <img
         className="w-full " src={post.thumbnailUrl}
          alt={post?.name}
        />
      </figure>
      <div className="card-body flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center">{post?.postTitle}</h2>
        <div>
        <p className="text-center text-xl font-medium">Rating: {post?.volunteerNeeded
        }</p>
        <p className="text-center text-xl font-medium mt-2">genres: {post?.category
        }</p>
        <p className="text-center text-xl font-medium mt-2">year: {post?.location
        }</p>
        <Link className="flex justify-center items-center mt-4" to={`/post/details/${post._id}`}><button className="btn btn-accent text-white text-xl font-medium">Explore details</button></Link>
        </div>
        
      </div>
    </div>
   </div>
  );
};

export default AllVolunteerCard;