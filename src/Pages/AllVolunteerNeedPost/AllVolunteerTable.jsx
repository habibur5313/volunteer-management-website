import React from "react";
import { Link } from "react-router-dom";

const AllVolunteerTable = ({ post, idx }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td className="hidden sm:block">
        <img className="w-20 rounded-xl" src={post.thumbnailUrl} alt="" />
      </td>
      <td>{post.postTitle}</td>
      <td>{post.category}</td>
      <td>
        <Link to={`/volunteerDetails/${post._id}`}>
          <button className="btn-link btn-accent">view detais</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllVolunteerTable;
