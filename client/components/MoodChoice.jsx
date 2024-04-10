import React from "react";
import chill from "../assets/chill.jpg";
import moodbooster from "../assets/moodbooster.jpg";
import motivated from "../assets/motivated.jpg";
import Happy from "../assets/Happy.jpeg";
import feelingblue from "../assets/feelingblue.jpg";
import anger from "../assets/anger.jpg";
import upbeat from "../assets/Energetic.jpeg";

const MoodChoice = ({ onClickBtn }) => {

  return (
    <div
      className="shadow-lg rounded-md mx-4 mt-4 
      bg-gradient-to-r from-black  via-gray-900 to-gray-800
    scrollbar-thin overflow-y-scroll max-h-screen text-white"
    >
      <section className="bg-gradient-to-r from-black  via-gray-900 to-gray-800">
        <div className=" px-4 mx-auto max-w-screen-xl text-center">
          <h1
            className="my-8 text-4xl font-extrabold tracking-tight leading-none 
          text-gray-400
          md:text-5xl lg:text-6xl "
          >
            Mood for tunes?
          </h1>
        </div>

        <div className="justify-center p-4 gap-4 grid grid-cols-3">
          <div
            onClick={() => onClickBtn()}
            className="max-w-sm bg-zinc-900 rounded-lg shadow col-span-1 h-72"
          >
            <div className="relative overflow-hidden rounded-t-lg h-56 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="rounded-t-lg min-h-56 hover:scale-105 transition-transform duration-300 ease-in-out"
                src={chill}
                alt="chill"
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 ">
                Chill
              </h5>
            </div>
          </div>

          <div
            onClick={() => onClickBtn()}
            className="max-w-sm bg-zinc-900 rounded-lg shadow col-span-1 h-72"
          >
            <div className="relative overflow-hidden rounded-t-lg h-56 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="rounded-t-lg min-h-56 hover:scale-105 transition-transform duration-300 ease-in-out"
                src={upbeat}
                alt="upbeat"
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 ">
                Upbeat
              </h5>
            </div>
          </div>

          <div
            onClick={() => onClickBtn()}
            className="max-w-sm bg-zinc-900 rounded-lg shadow col-span-1 h-72"
          >
            <div className="relative overflow-hidden rounded-t-lg h-56 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="rounded-t-lg min-h-56 hover:scale-105 transition-transform duration-300 ease-in-out"
                src={motivated}
                alt="motivated"
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-100 ">
                Motivated
              </h5>
            </div>
          </div>

          <div
            onClick={() => onClickBtn()}
            className="max-w-sm bg-zinc-900  rounded-lg shadow col-span-1 h-72"
          >
            <div className="relative overflow-hidden rounded-t-lg h-56 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="rounded-t-lg min-h-56 hover:scale-105 transition-transform duration-300 ease-in-out"
                src={Happy}
                alt="happy"
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 ">
                Mood Booster
              </h5>
            </div>
          </div>

          <div
            onClick={() => onClickBtn()}
            className="max-w-sm bg-zinc-900  rounded-lg shadow col-span-1 h-72"
          >
            <div className="relative overflow-hidden rounded-t-lg h-56 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="rounded-t-lg min-h-56 hover:scale-105 transition-transform duration-300 ease-in-out"
                src={feelingblue}
                alt="feelingblue"
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 ">
                Feeling Blue
              </h5>
            </div>
          </div>

          <div
            onClick={() => onClickBtn()}
            className="max-w-sm bg-zinc-900  rounded-lg shadow col-span-1 h-72"
          >
            <div className="relative overflow-hidden rounded-t-lg h-56 hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="rounded-t-lg min-h-56 hover:scale-105 transition-transform duration-300 ease-in-out"
                src={anger}
                alt="anger"
              />
            </div>

            <div onClick={() => onClickBtn()} className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 ">
                Anger
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodChoice;
