import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllVolunteerCard from "./AllVolunteerCard";
import axios from "axios";
import { MdTableRows, MdViewColumn } from "react-icons/md";
import AllVolunteerTable from "./AllVolunteerTable";

const AllVolunteerNeedPost = () => {
  useEffect(() => {
    document.title = "All Volunteer Need Post | Chill Gamer ";
  }, []);
  const { data } = useLoaderData();
  const [posts, setPosts] = useState(data);
  const [search, setSearch] = useState("");
  const [tableFormat, setTableFormat] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_server}/search?search=${search}`)
      .then(({ data }) => {
        setPosts(data);
      });
  }, [search]);

  const handleSort = (e) => {
    e.preventDefault()
   const sort = e.target.value

  };

  const handleColumns = () => {
    setTableFormat(true);
  };
  const handleRows = () => {
    setTableFormat(false);
  };
  return (
    <div>
      <div className=" flex flex-col sm:flex-row justify-end gap-4 mb-4">
        <input
          type="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="search by title"
          className="input text-black input-bordered h-14 max-w-md w-full mx-auto lg:mx-0"
          id=""
        />
        <select onChange={handleSort} className="select select-bordered h-14 max-w-md lg:max-w-xs mx-auto lg:mx-0 w-full">
        <option>sorting</option>
          <option>sort by date</option>
          <option>sort by volunteer need</option>
        </select>
      </div>
      <div className="flex justify-end mr-10">
        {tableFormat ? (
          <MdTableRows onClick={handleRows} className="text-4xl" />
        ) : (
          <MdViewColumn onClick={handleColumns} className="text-4xl" />
        )}
      </div>
      {tableFormat ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {posts.map((post) => (
            <AllVolunteerCard key={post._id} post={post}></AllVolunteerCard>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th className="hidden sm:block">Photo</th>
                <th>Title</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <AllVolunteerTable
                  key={post._id}
                  idx={idx}
                  post={post}
                ></AllVolunteerTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllVolunteerNeedPost;
