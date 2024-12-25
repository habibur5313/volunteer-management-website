import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const VolunteerCardDetails = () => {
  const { data } = useLoaderData();
  const {
    organizerEmail,
    organizerName,
    thumbnailUrl,
    postTitle,
    description,
    category,
    location,
    volunteerNeeded,
    Date,
  } = data;
  const {user} = useContext(AuthContext)

  return (
    <div className="flex flex-col  max-w-3xl mx-auto">
      <div className="w-full">
        <img className="w-full" src={thumbnailUrl} alt={postTitle} />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
        
          <div className="w-full flex-1 pl-4 pt-6 pb-6">
            <p className="text-xl font-medium">
              deadline: {Date.split("T")[0]}
            </p>
            <h2 className="text-3xl font-semibold">{postTitle}</h2>

            <div>
              <p className=" text-xl font-medium mt-2">Category: {category}</p>
              <p className=" text-xl font-medium">Location: {location}</p>
              <p className=" text-xl font-medium">
                Volunteer need: {volunteerNeeded}
              </p>
              <p className=" text-xl font-medium">
                Description: {description}
              </p>
              
            </div>
          </div>
         
        
        <div className="flex-1">
        <form action="" className="text-black">
        <input
              type="text"
              value={user?.displayName}
              className="input input-bordered h-14 w-full mt-4"
            />
             <input
              type="text"
              value={user?.email}
              className="input input-bordered w-full h-14 mt-4"
            />
            <input type="submit" value="Request Post" />
        </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCardDetails;
