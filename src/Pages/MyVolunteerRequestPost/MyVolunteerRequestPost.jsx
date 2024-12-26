import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useAxios from "../../CustomHook/UseAxios";
import MyPostRequestTable from "./MyVolunteerRequestTable";
import Swal from "sweetalert2";

const MyVolunteerRequestPost = () => {
     useEffect(() =>{
        document.title="My Volunteer Request Post | Volunteer Network"
       },[])
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const email = user?.email;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_server}/myVolunteerRequestPosts/${email}`)
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
       Swal.fire({
                 position: "top-center",
                 icon: "error",
                 title: err.message,
                 showConfirmButton: false,
                 timer: 1000,
               });
      });
  }, [email]);
  return (
    <div>
      <h1 className="text-3xl mt-5 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
        {user.displayName},Your All Request is here.
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th className="hidden sm:block">Photo</th>
              <th>Status</th>
              <th>Suggestions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, idx) => (
              <MyPostRequestTable
                key={post._id}
                post={post}
                idx={idx}
                posts={posts}
                setPosts={setPosts}
              ></MyPostRequestTable>
            ))}
          </tbody>
        </table>
        <h1>{posts.length === 0 && <p className="text-center text-2xl font-medium text-purple-600">Please Request first</p>}</h1>

      </div>
    </div>
  );
};

export default MyVolunteerRequestPost;
