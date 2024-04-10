import React from "react";
import ProgressCard from "./ProgressCard";

const Analysis = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-6 ">

      <div class="col-span-1 w-full rounded-lg shadow ">
        <div class="flex justify-between mb-3">
          <div class="flex items-center">

            <div class="flex justify-center items-center">
              <h5 class="text-xl font-bold leading-none text-gray-300 pe-1">
                Your mood's progress
              </h5>

            </div>
          </div>
        </div>

        <div class="bg-gray-900 p-4 rounded-lg mt-6">
          <div class="grid grid-cols-3 gap-3 mb-2">
            <dl class="bg-orange-400 hover:bg-orange-500 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-orange-100  text-orange-600  text-sm font-medium flex items-center justify-center mb-1">
                12
              </dt>
              <dd class="text-white text-xs font-medium">Mood Booster</dd>
            </dl>

            <dl class="bg-pink-400 hover:bg-pink-500 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-pink-100  text-pink-600  text-sm font-medium flex items-center justify-center mb-1">
                23
              </dt>
              <dd class="text-white text-xs font-medium">Motivated</dd>
            </dl>

            <dl class="bg-sky-500  hover:bg-sky-600 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-sky-100  text-sky-600  text-sm font-medium flex items-center justify-center mb-1">
                64
              </dt>
              <dd class="text-white text-xs font-medium">Feeling blue</dd>
            </dl>

            <dl class="bg-indigo-500 hover:bg-indigo-600 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-indigo-100  text-indigo-600  text-sm font-medium flex items-center justify-center mb-1">
                12
              </dt>
              <dd class="text-white  text-xs font-medium">Chill</dd>
            </dl>

            <dl class="bg-green-500 hover:bg-green-600 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-green-100  text-green-600  text-sm font-medium flex items-center justify-center mb-1">
                12
              </dt>
              <dd class="text-white  text-xs font-medium">Upbeat</dd>
            </dl>

            <dl class="bg-rose-600 hover:bg-rose-700 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-rose-100  text-rose-600  text-sm font-medium flex items-center justify-center mb-1">
                12
              </dt>
              <dd class="text-white  text-xs font-medium">Anger</dd>
            </dl>
          </div>
          <button
            data-collapse-toggle="more-details"
            type="button"
            class="hover:underline text-xs text-gray-500  font-medium inline-flex items-center"
          >
            Show more details{" "}
            <svg
              class="w-2 h-2 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="more-details"
            class="border-gray-200 border-t  pt-3 mt-3 space-y-2 hidden"
          >
            <dl class="flex items-center justify-between">
              <dt class="text-gray-500  text-sm font-normal">
                Average task completion rate:
              </dt>
              <dd class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13V1m0 0L1 5m4-4 4 4"
                  />
                </svg>{" "}
                57%
              </dd>
            </dl>
            <dl class="flex items-center justify-between">
              <dt class="text-gray-500  text-sm font-normal">
                Days until sprint ends:
              </dt>
              <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                13 days
              </dd>
            </dl>
            <dl class="flex items-center justify-between">
              <dt class="text-gray-500  text-sm font-normal">Next meeting:</dt>
              <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                Thursday
              </dd>
            </dl>
          </div>
        </div>

   
      </div>



      <div className="col-span-1 w-full mx-auto">
        {/* <!-- Radial Chart --> */}
        {/* <div class="py-6" id="radial-chart"> */}
        <ProgressCard />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Analysis;
