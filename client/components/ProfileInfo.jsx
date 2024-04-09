import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const ProfileInfo = () => {
  return (
    <main
      className="overflow-hidden shadow-lg rounded-md m-4
      bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-500"
    >
      <IoChevronBackCircleOutline className="text-3xl ml-2 mt-2 text-gray-200 hover:text-white" />

      <section className="overflow-hidden flex mb-4 text-white">
        <div className="w-[30%] h-full flex items-center justify-start ml-6">
          <img
            className="rounded-full w-60 mx-auto"
            src="https://th.bing.com/th/id/OIP.zcGPiHagovnL2V2Gysl_CAHaHa?rs=1&pid=ImgDetMain"
            alt="avatar"
          />
        </div>

        <div className=" w-[70%] flex flex-col justify-end ml-6">
          <p className="text-base">Profile</p>
          <p className="text-8xl font-bold mt-2">SABAI SABAI</p>
          <p className="text-base mt-6">8 followers - 21 following</p>
        </div>
      </section>
    </main>
  );
};

export default ProfileInfo;
