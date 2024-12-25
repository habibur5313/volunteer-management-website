import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = ({ toggleDarkMode }) => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { pathname } = useLocation();

  return (
    <div className=" navbar pt-4  items-start rounded-xl ">
      <div className="navbar-start mb-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content bg-base-100  rounded-box z-20 mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/allVolunteer"}>All volunteer</NavLink>
            {user && (
              <NavLink to={"/addVolunteer"}>Add Volunteer need Post</NavLink>
            )}
            {user && (
              <li>
                <a>Manage my posts</a>
                <ul className="p-2 ">
                  <li>
                    <NavLink to={"/myVolunteerNeedPosts"}>
                      My volunteer need posts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/myVolunteerRequestPost"}>
                      My Volunteer Request Post
                    </NavLink>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
        <h1 className="text-4xl font-semibold text-purple-500">Chill Gamer</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center px-1 gap-2 xl:gap-4 text-xl font-medium ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/allVolunteer"}>All volunteer</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={toggleDarkMode}
          className="p-2 m-4 border rounded hidden sm:block"
        >
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
        </button>
        {user ? (
          <div className="flex items-center gap-4 relative">
            <div className="dropdown text-black">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 text-xl hidden md:block font-medium"
              >
                My Profile
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu text-xl font-medium  space-y-4 py-4 mt-2 rounded-box bg-zinc-200 z-50  w-60 p-2 shadow"
              >
                {user && (
                  <NavLink to={"/addVolunteer"}>
                    Add Volunteer need Post
                  </NavLink>
                )}
                <li>
                  <details>
                    <summary>Manage my posts</summary>
                    <ul className="p-2 z-50 shadow">
                      <li>
                        <NavLink to={"/myVolunteerNeedPosts"}>
                          My volunteer need posts
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/myVolunteerRequestPost"}>
                          My Volunteer Request Post
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-10 rounded-full my-anchor-element cursor-pointer"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-black rounded-box z-20 -ml-24 lg:w-60 p-2 shadow"
              >
                <li>
                  <p className="text-white text-xl font-medium">
                    {user?.displayName}
                  </p>
                </li>
                <li>
                  <button
                    className="btn bg-purple-700 text-white"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : pathname === "/login" ? (
          <Link className="btn mr-5 bg-purple-700 text-white" to={"/register"}>
            Sign UP
          </Link>
        ) : (
          <Link className="btn mr-5 bg-purple-700 text-white" to={"/login"}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
