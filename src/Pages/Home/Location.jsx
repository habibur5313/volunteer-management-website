import React from "react";

const Location = () => {
  return (
    <>
      <h1 className="text-3xl mt-20 font-bold text-center text-purple-600">
        Grand Sultan Tea Resort & Golf
      </h1>
      <p className="text-xl font-semibold text-center max-w-xl mx-auto mt-4">
        Sreemangal, Moulvibazar, Sylhet, Bangladesh
      </p>
      <iframe
        className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] mt-10 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28954.451394407028!2d91.84379247431639!3d24.887527400000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab4a5112d1cd%3A0x9ead650af30ee889!2sSylhet%20Jubo%20Academy%20(SJA)!5e0!3m2!1sen!2sbd!4v1739352315928!5m2!1sen!2sbd"
      ></iframe>
    </>
  );
};

export default Location;
