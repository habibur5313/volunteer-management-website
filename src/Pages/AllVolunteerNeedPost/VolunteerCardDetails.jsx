import React, { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const VolunteerCardDetails = () => {
     useEffect(() =>{
        document.title="Volunteer Card Details | Volunteer Network"
       },[])
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
    _id
  } = data;

  return (
    <div className="flex flex-col  max-w-3xl mx-auto">
      <div className="w-full">
        <img className="w-full rounded-xl" src={thumbnailUrl} alt={postTitle} />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
        
          <div className="w-full pl-4 pt-6 pb-6">
            <p className="text-xl text-end font-medium">
              deadline: {Date.split("T")[0]}
            </p>
            <h2 className="text-xl font-semibold mt-1">Organizer Email: {organizerEmail}</h2>
            <h2 className="text-xl font-semibold mt-2">Organizer Name: {organizerName}</h2>
            <h2 className="text-3xl font-semibold mt-2">Title: {postTitle}</h2>

            <div>
              <p className=" text-xl font-medium mt-2">Category: {category}</p>
              <p className=" text-xl font-medium">Location: {location}</p>
              <p className=" text-xl font-medium">
                Volunteer need: {volunteerNeeded}
              </p>
              <p className=" text-xl font-medium">
                Description: {description}
              </p>
              <Link to={`/beAVolunteer/${_id}`}><div className="flex justify-end mt-2">
              <button className="btn text-xl font-medium btn-accent text-white">be a volunteer</button></div></Link>
            </div>
          </div> 
      </div>
    </div>
  );
};

export default VolunteerCardDetails;
