import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";

const BeAVolunteer = () => {
                    const {data} = useLoaderData()
                    const {user} = useContext(AuthContext)
                    console.log(data);
                    
  return (
    <div className="">
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
  );
};

export default BeAVolunteer;
