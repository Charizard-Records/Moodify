import React from "react";
import chill from "../assets/chill.jpg";
import moodbooster from "../assets/moodbooster.jpg";
import motivated from "../assets/motivated.jpg";
import Happy from "../assets/Happy.jpeg";
import feelingblue from "../assets/feelingblue.jpg";
import anger from "../assets/anger.jpg";

import { IoChevronBackCircleOutline } from "react-icons/io5";

const MoodChoice = () => {
  return (
    <div      className="shadow-lg rounded-md mt-4 mr-4 
    scrollbar-thin overflow-y-scroll max-h-screen text-white">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Mood for tunes?
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="flex">
            {/* row 1 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img className="rounded-t-lg h-42" src={chill} alt="" />
                </div>
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Chill
                  </h5>
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg h-42" src={moodbooster} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Upbeat
                  </h5>
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg h-42" src={motivated} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Motivated
                  </h5>
                </a>
              </div>
            </div>
          </div>

          <div className="flex">{/* row 2 */}</div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg h-42" src={Happy} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Mood Booster
                </h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={feelingblue} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Feeling Blue
                </h5>
              </a>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg h-42" src={anger} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Anger
                </h5>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoodChoice;
