import React, { useState, useEffect } from "react";
import ProgressCard from "./ProgressCard";

const Analysis = () => {
  const [userHistory, setUserHistory] = useState([]);
  const [runned, setRunned] = useState(false);

  const [analyzedData, setAnalyzedData] = useState({
    moodBooster: {
      id: 9,
      name: "Mood Booster",
      count: 0,
    },
    motivated: {
      id: 8,
      name: "Motivated",
      count: 0,
    },
    feelingBlue: {
      id: 10,
      name: "Feeling Blue",
      count: 0,
    },
    chill: {
      id: 12,
      name: "Chill",
      count: 0,
    },
    upbeat: {
      id: 7,
      name: "Upbeat",
      count: 0,
    },
    anger: {
      id: 11,
      name: "Anger",
      count: 0,
    },
  });

  useEffect(() => {
    const getUserHistory = async () => {
      try {
        const response = await fetch("/getUserHistory", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: 1 }),
        });

        if (response.ok) {
          const data = await response.json();
          setUserHistory(data);
        } else {
          console.error("Error fetching user history");
        }
      } catch (error) {
        console.error("Error fetching user history:", error);
      }
    };

    getUserHistory();
    // console.log("userHistory from Analysis", userHistory);
  }, []);


  if (!runned) {
    for (let i = 0; i < userHistory.length; i++) {
      if (userHistory[i].mood == "Mood Booster") {
        analyzedData.moodBooster.count++;
      } else if (userHistory[i].mood == "Motivated") {
        analyzedData.motivated.count++;
      } else if (userHistory[i].mood == "Feeling blue") {
        analyzedData.feelingBlue.count++;
      } else if (userHistory[i].mood == "Chill") {
        analyzedData.chill.count++;
      } else if (userHistory[i].mood == "Upbeat") {
        analyzedData.upbeat.count++;
      } else if (userHistory[i].mood == "Anger") {
        analyzedData.anger.count++;
      }

      setAnalyzedData(analyzedData)
      setRunned(true);
    }

  }

  return (
    <div className="grid grid-cols-2 gap-8 p-6 ">
      <div className="col-span-1 w-full rounded-lg shadow ">
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <div className="flex justify-center items-center">
              <h5 className="text-xl font-bold leading-none text-gray-300 pe-1">
                Your mood's progress
              </h5>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg mt-6">
          <div className="grid grid-cols-3 gap-3 mb-2">
            {/* MOOD BOOSTER  */}
            <dl
              className="bg-orange-400 hover:bg-orange-500 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]"
            >
              <dt className="w-8 h-8 rounded-full bg-orange-100  text-orange-600  text-sm font-medium flex items-center justify-center mb-1">
                {analyzedData.moodBooster.count}
              </dt>
              <dd className="text-white text-xs font-medium">
                {analyzedData.moodBooster.name}
              </dd>
            </dl>

            {/* MOTIVATED  */}
            <dl
              className="bg-pink-400 hover:bg-pink-500 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]"
            >
              <dt className="w-8 h-8 rounded-full bg-pink-100  text-pink-600  text-sm font-medium flex items-center justify-center mb-1">
                {analyzedData.motivated.count}
              </dt>
              <dd className="text-white text-xs font-medium">
                {analyzedData.motivated.name}
              </dd>
            </dl>

            {/* FEELING BLUE  */}
            <dl
              className="bg-sky-500  hover:bg-sky-600 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]"
            >
              <dt className="w-8 h-8 rounded-full bg-sky-100  text-sky-600  text-sm font-medium flex items-center justify-center mb-1">
                {analyzedData.feelingBlue.count}
              </dt>
              <dd className="text-white text-xs font-medium">
                {analyzedData.feelingBlue.name}
              </dd>
            </dl>

            {/* CHILL  */}
            <dl
              className="bg-indigo-500 hover:bg-indigo-600 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]"
            >
              <dt className="w-8 h-8 rounded-full bg-indigo-100  text-indigo-600  text-sm font-medium flex items-center justify-center mb-1">
                {analyzedData.chill.count}
              </dt>
              <dd className="text-white  text-xs font-medium">
                {analyzedData.chill.name}
              </dd>
            </dl>

            {/* UPBEAT  */}
            <dl
              className="bg-green-500 hover:bg-green-600 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]"
            >
              <dt className="w-8 h-8 rounded-full bg-green-100  text-green-600  text-sm font-medium flex items-center justify-center mb-1">
                {analyzedData.upbeat.count}
              </dt>
              <dd className="text-white  text-xs font-medium">
                {analyzedData.upbeat.name}
              </dd>
            </dl>

            {/* ANGER  */}
            <dl
              className="bg-rose-600 hover:bg-rose-700 transition-transform duration-300 ease-linear
            rounded-lg flex flex-col items-center justify-center h-[78px]"
            >
              <dt className="w-8 h-8 rounded-full bg-rose-100  text-rose-600  text-sm font-medium flex items-center justify-center mb-1">
                {analyzedData.anger.count}
              </dt>
              <dd className="text-white  text-xs font-medium">
                {analyzedData.anger.name}
              </dd>
            </dl>
          </div>
          <button
            data-collapse-toggle="more-details"
            type="button"
            className="hover:underline text-xs text-gray-500  font-medium inline-flex items-center"
          >
            Show more details{" "}
            <svg
              className="w-2 h-2 ms-1"
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
            className="border-gray-200 border-t  pt-3 mt-3 space-y-2 hidden"
          >
            <dl className="flex items-center justify-between">
              <dt className="text-gray-500  text-sm font-normal">
                Average task completion rate:
              </dt>
              <dd className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                <svg
                  className="w-2.5 h-2.5 me-1.5"
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
            <dl className="flex items-center justify-between">
              <dt className="text-gray-500  text-sm font-normal">
                Days until sprint ends:
              </dt>
              <dd className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                13 days
              </dd>
            </dl>
            <dl className="flex items-center justify-between">
              <dt className="text-gray-500  text-sm font-normal">
                Next meeting:
              </dt>
              <dd className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                Thursday
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="col-span-1 w-full mx-auto">
        {/* <!-- Radial Chart --> */}
        {/* <div className="py-6" id="radial-chart"> */}
        {/* {Object.keys(analyzedData) > 0 ? (
          <ProgressCard analyzedData={analyzedData} />
        ) : (
          <p>Loading</p>
        )} */}
         <ProgressCard analyzedDataProps={analyzedData} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Analysis;
