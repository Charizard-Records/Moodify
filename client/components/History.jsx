import React, { useEffect, useState } from 'react'
import Emotional from "../assets/Emotional.jpeg";
import Energetic from "../assets/Energetic.jpeg";
import Happy from "../assets/Happy.jpeg";
import Introspective from "../assets/Introspective.jpeg";
import Positive from "../assets/Positive.jpeg";
import Relaxed from "../assets/Relaxed.jpeg";

const MoodHistory = () => {
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    const getUserHistory = async () => {
      try {
        const response = await fetch('/getUserHistory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: 3 }),
        });
    
        if (response.ok) {
          const data = await response.json();
          setUserHistory(data);
        } else {
          console.error('Error fetching user history');
        }
      } catch (error) {
        console.error('Error fetching user history:', error);
      }
    };

    getUserHistory()
    // console.log(userHistory)
  }, []);
  // console.log("userHistory: ", userHistory);
  return (
    <div
      className="shadow-lg rounded-md mt-4 mr-4 
    scrollbar-thin overflow-y-scroll max-h-screen text-white"
    >
      {userHistory.map((userHis, idx) => (
        <div
        key={idx}
          className="p-2 mb-2  rounded-lg 
       bg-gradient-to-r from-black  via-gray-900 to-gray-800 "
        >
          <time className="text-base font-semibold text-gray-200 ">
            {new Date(userHis.date).toLocaleDateString()}
          </time>

          <ol className="divide-y divider-gray-200 ">
            <li>
              <a href="#" className="items-center block p-1 sm:flex  ">
                <img
                  className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0 cover-contain border"
                  src={Energetic}
                  alt="Jese Leos image"
                />
                <div>
                  <div className="text-base font-normal">
                    <span className="font-medium text-indigo-400">
                      {userHis.mood}
                    </span>
                  </div>
                  <div className="text-sm font-normal ">
                    {userHis.message}
                  </div>
                  <span className="inline-flex items-center text-xs font-normal ">
                    <svg
                      className="w-2.5 h-2.5 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    Public
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default MoodHistory;
