import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
const MyPostUpdate = () => {
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

  //   const [startDate, setStartDate] = useState(new Date());
  //   console.log(startDate);

  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnailUrl = form.thumbnailUrl.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteerNeeded = form.volunteerNeeded.value;
    //     const Date = startDate;

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
    };

    axios
      .patch(`${import.meta.env.VITE_server}/posts/update/${_id}`, Post)
      .then(({ data }) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Review Added successfully",
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
          {organizerName}, Update your review.
        </h1>
        <form onSubmit={handleUpdateReview} className="text-black">
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <input
              type="text"
              value={organizerName}
              className="input input-bordered h-14 w-full"
            />
            <input
              type="text"
              value={organizerEmail}
              className="input input-bordered w-full h-14"
            />
          </div>
          {/* thumbnail and title */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <input
              type="text"
              defaultValue={thumbnailUrl}
              placeholder="Type Thumbnail URL"
              name="thumbnailUrl"
              className="input input-bordered h-14 w-full"
            />
            <input
              type="text"
              defaultValue={postTitle}
              placeholder="Type post title"
              name="postTitle"
              className="input input-bordered w-full h-14"
            />
          </div>
          {/* Description */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-4 md:mt-8">
            <textarea
              placeholder="type review description"
              name="description"
              defaultValue={description}
              className="textarea textarea-bordered h-14 w-full"
            ></textarea>
          </div>
          {/* category and location */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <select
              name="category"
              defaultValue={category}
              className="select select-bordered w-full h-14"
            >
              <option disabled>Category</option>
              <option>healthcare</option>
              <option>education</option>
              <option>social service</option>
              <option>animal welfare</option>
            </select>
            <input
              type="text"
              defaultValue={location}
              className="input input-bordered w-full h-14"
              placeholder="type location"
              name="location"
            />
          </div>
          {/* No. of volunteers needed and deadline */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12  mx-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-8">
            <input
              type="number"
              defaultValue={volunteerNeeded}
              name="volunteerNeeded"
              className="input input-bordered h-14 w-full"
            />

            {/* <div className="w-full h-14 border rounded-xl flex items-center justify-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full h-full text-lg px-3 py-2"
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
              />
            </div> */}
          </div>
          {/* submit */}
          <div className="w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 mx-auto mt-10">
            <input
              type="submit"
              className="w-full btn btn-accent text-white font-medium text-xl"
              value="Update Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyPostUpdate;
