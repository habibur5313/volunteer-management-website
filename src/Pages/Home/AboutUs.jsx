import React from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <h1 className="text-3xl uppercase mt-10 font-semibold animate__animated animate__pulse animate__infinite infinite text-purple-700 text-center">
        about us
      </h1>
      <div className=" bg-purple-700 rounded-xl text-white  mt-10 flex flex-col xl:flex-row  ">
        <div className=" flex-1 flex flex-col items-center justify-center px-2 py-4 xl:py-20 lg:px-10 space-y-3">
          <h1 className="text-4xl font-bold text-center">THE VOLUNTEER NETWORK</h1>
          <p className="text-xl font-medium text-center">
          Welcome to VOLUNTEER NETWORK! Our mission is to bring together passionate and dedicated individuals who want to make a difference in their communities. We believe in the power of collective action and the positive impact that volunteering can have on society. Whether it's supporting local initiatives, helping those in need, or driving social change, our network provides a platform for volunteers to connect, collaborate, and contribute. Join us in our journey to create a better world, one act of kindness at a time.
          </p>
          <div className="text-2xl  font-medium flex gap-2">
            <Link
              to={"https://www.linkedin.com/in/md-habibur-rahman-4bbbbb340/"}
            >
              <button>
                <FaLinkedin />
              </button>
            </Link>
            <Link to={"https://www.facebook.com/habibur5231"}>
              <button>
                <FaFacebookSquare />
              </button>
            </Link>
            <Link to={"https://github.com/habibur5313"}>
              {" "}
              <button>
                <FaGithubSquare />
              </button>
            </Link>
            <Link to={"https://discord.com/habibur5231"}>
              <button>
                <FaDiscord />
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex-1 flex items-center justify-center px-2 py-4 xl:py-20 lg:px-10 ">
          <div className="">
            <img
              className=" rounded-xl w-full h-[250px] sm:h-[300px]"
              src="https://i.ibb.co.com/ns8SgvH/download-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
