import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const BeAVolunteer = () => {
  useEffect(() => {
    document.title = "Add Post | Chill Gamer ";
  }, []);
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
    _id,
  } = data;
  const {user} = useContext(AuthContext)

  //   const [startDate, setStartDate] = useState(new Date());
  //   console.log(startDate);

  const handleBeAVolunteer = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnailUrl = form.thumbnailUrl.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteerNeeded = form.volunteerNeeded.value;
    //     const Date = startDate;
    const postId = _id;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const suggestion = form.suggestion.value;
    const status = form.status.value;

    const Post = {
      organizerEmail,
      organizerName,
      thumbnailUrl,
      postTitle,
      description,
      category,
      location,
      volunteerNeeded,
      //       Date,
      postId,
      userEmail,
      userName,
      suggestion,
      status
    };
if(organizerEmail === userEmail){
                    return Swal.fire({
                                                  position: "top-center",
                                                  icon: "error",
                                                  title: 'Please Request Other Post',
                                                  showConfirmButton: false,
                                                  timer: 1500,
                                                });
}
if(volunteerNeeded <= 0){
                    return Swal.fire({
                                                  position: "top-center",
                                                  icon: "error",
                                                  title: 'Volunteer not needed',
                                                  showConfirmButton: false,
                                                  timer: 1500,
                                                });
}

    axios
      .post(`${import.meta.env.VITE_server}/postRequest`, Post)
      .then(({ data }) => {
                    
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Requested successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-3xl mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          {organizerName}, Request for volunteer.
        </h1>
        <form onSubmit={handleBeAVolunteer} className="text-black">
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 ">
          <div className="w-full">
          <label className="label">
            <span className="label-text text-purple-700 font-medium">Organizer Name</span>
          </label>
            <input
              type="text"
              value={organizerName}
              className="input input-bordered h-14 w-full"
            />
          </div>
            <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Organizer Email</span>
          </label>
            <input
              type="text"
              value={organizerEmail}
              className="input input-bordered  h-14 w-full"
            />
            </div>
          </div>
          {/* thumbnail and title */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto flex flex-col md:flex-row gap-4 mt-4 ">
          <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">thumbnail Url</span>
          </label>
            <input
              type="text"
              value={thumbnailUrl}
              placeholder="Type Thumbnail URL"
              name="thumbnailUrl"
              className="input input-bordered h-14 w-full"
            />
            </div>
            <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Post Title</span>
          </label>
            <input
              type="text"
              value={postTitle}
              placeholder="Type post title"
              name="postTitle"
              className="input input-bordered w-full h-14"
            />
            </div>
          </div>
          {/* Description */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-4 ">
          <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Description</span>
          </label>
            <textarea
              placeholder="type review description"
              name="description"
              value={description}
              className="textarea textarea-bordered h-14 w-full"
            ></textarea>
            </div>
          </div>
          {/* category and location */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 ">
          <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Category</span>
          </label>
            <select
              name="category"
              value={category}
              className="select select-bordered w-full h-14"
            >
              <option disabled>Category</option>
              <option>healthcare</option>
              <option>education</option>
              <option>social service</option>
              <option>animal welfare</option>
            </select>
            </div>
            <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Location</span>
          </label>
            <input
              type="text"
              value={location}
              className="input input-bordered w-full h-14"
              placeholder="type location"
              name="location"
            /></div>
          </div>
          {/* No. of volunteers needed and deadline */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 ">
          <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Volunteer Need</span>
          </label>
            <input
              type="number"
              value={volunteerNeeded}
              name="volunteerNeeded"
              className="input input-bordered h-14 w-full"
            /></div>

            {/* <div className="w-full h-14 border rounded-xl flex items-center justify-center">
            <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">thumbnail Url</span>
          </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full h-full text-lg px-3 py-2"
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
              /></div>
            </div> */}
            
          </div>
          {/* Request user name and email */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 ">
          <div className="w-full">
          <label className="label">
            <span className="label-text text-purple-700 font-medium">Your Name</span>
          </label>
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered h-14 w-full"
            />
          </div>
            <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Your Email</span>
          </label>
            <input
              type="text"
              value={user?.email}
              className="input input-bordered  h-14 w-full"
            />
            </div>
          </div>
          {/* suggestion editable */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-4 ">
          <div className="w-full">
            <label className="label">
            <span className="label-text text-purple-700 font-medium">Suggestion</span>
          </label>
            <textarea
              placeholder="type suggestion"
              name="suggestion"
              className="textarea textarea-bordered h-14 w-full"
            ></textarea>
            <div className="w-full">
                    <label className="label"> <span className="label-text text-purple-700 font-medium">status</span></label>
                    <input
              type="text"
              name="status"
              value={'requested'}
              className="input input-bordered  h-14 w-full"
            /> 
            </div>
            </div>
          </div>
          {/* submit */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-10">
            <input
              type="submit"
              className="w-full btn btn-accent text-white font-medium text-xl"
              value="Request"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteer;
