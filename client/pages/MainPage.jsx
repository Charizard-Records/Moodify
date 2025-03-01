import React, { useState } from "react";
import MoodChoice from "../components/MoodChoice";
import MusicList from "../components/MusicList";
import { GiLoveSong } from "react-icons/gi";

const MainPage = () => {
  const [opened, setOpened] = useState(false);
  const [moodID, setMoodID] = useState(0);
  const [moodText, setmoodText] = useState("");

  const toggle = () => {
    setOpened(!opened);
  };

  const idToggle = (id) => {
    setMoodID(id);
    console.log(moodID);
  };

  const handleInputChange = (event) => {
    setmoodText(event.target.value);
    console.log(moodText)
  };

  const addMoodHandleClick = (event) => {
    console.log("submit")
    event.preventDefault();

    const history = {
      user_id: 1, //this is static. will need to make it dynamic.
      mood_id: moodID, //this is static, will need to make it dynamic.
      message: moodText, //will need to grab from the text box.
    };

    console.log("history", history)

    console.log("button clicked on ");
    fetch("http://localhost:3000/addHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(history),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("History added successfully:", data);
      })
      .catch((error) => {
        console.error("There was a problem adding history:", error);
      });

    setmoodText("");
  };

  return (
    <div className={`bg-black h-full`}>
      {/* <!-- Main modal --> */}
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`
        ${
          !opened && "hidden"
        } fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-full max-w-2xl
        h-auto p-6 
        bg-gradient-to-r from-zinc-800  via-zinc-800 to-zinc-900
        rounded-lg shadow-lg
        z-50 overflow-y-autooverflow-x-hidden
      `}
      >
        <div className="relative p-8 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-8 md:p-5 border-b border-zinc-300 rounded-t ">
              <h3 className="text-xl font-semibold text-white ">
                Hey there, how's it going?
              </h3>
              <button
                type="button"
                className="text-gray-300 hover:text-white
                rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-toggle="crud-modal"
                onClick={toggle}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form className="p-4" onSubmit={addMoodHandleClick}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm border-none text-gray-900 bg-gray-200 rounded-lg border  focus:ring-zinc-200   "
                    placeholder="My vibe today's..."
                    value={moodText} // Bind the state value to the textarea
                    onChange={handleInputChange} // Attach the handleChange function to capture changes
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center  mt-2
                bg-gradient-to-r from-pink-300  via-purple-400 to-indigo-500
                hover:text-zinc-800
                font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Save your thought
                <GiLoveSong className="ml-2 text-xl" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-3 ${opened && "opacity-50"}`}>
        <div className="col-span-2">
          <MoodChoice onClickBtn={toggle} onClickIDBtn={idToggle} />
        </div>
        <div className="col-span-1 mx-auto w-full">
          <MusicList />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
