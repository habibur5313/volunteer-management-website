import axios from "axios";
import React from "react";
import { GrUpdate } from "react-icons/gr";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostRequestTable = ({ post, idx,setPosts,posts }) => {
  
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you Sure?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_server}/myPostRequestDelete/${id}`)
          .then(({data}) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "", "success");
              const remaining = posts.filter(rev => rev._id !== id)
              setPosts(remaining)
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Request not deleted", "", "info");
      }
    });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td className="hidden sm:block">
        <img className="w-20 rounded-xl" src={post.thumbnailUrl} alt="" />
      </td>
      <td>{post.status}</td>
      <td>{post.suggestion}</td>
      <td className="flex items-center justify-center gap-4">
        <button
          onClick={() => handleCancel(post._id)}
          className="btn btn-accent text-3xl text-red-700"
        >
          <TiDelete />
        </button>
      </td>
    </tr>
  );
};

export default MyPostRequestTable;