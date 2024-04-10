import React from "react";
// import { IoChevronBackCircleOutline } from "react-icons/io5";
import playbutton from "../assets/playbutton.png";

const MusicList = () => {
  return (
    <div
      className="shadow-lg rounded-md mt-4 mr-4 
    scrollbar-thin overflow-y-scroll max-h-screen text-white"
    >
      <div>
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Playlist
            </h5>
            <a
              href="#"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="w-16 h-16"
                      src="https://media.pitchfork.com/photos/659ecd1ba6290d398557da8f/master/pass/Kid-Cudi-Insano.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                      Maybe So
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Kid Cudi
                    </p>
                  </div>
                  <button
                    style={{
                      padding: "4px",
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <img
                      src={playbutton}
                      alt="Play Button"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </button>
                </div>
              </li>
              {/* extra */}
              <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                  <div class="flex-shrink-0">
                    <img
                      class="w-16 h-16"
                      src="https://media.pitchfork.com/photos/641deb27aef545723eec5e31/3:2/w_3000,h_2000,c_limit/Kacey-Musgraves-Golden-Hour.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                      The Architect
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Kacey Musgraves
                    </p>
                  </div>
                  <button
                    style={{
                      padding: "4px",
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <img
                      src={playbutton}
                      alt="Play Button"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </button>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="w-16 h-16"
                      src="https://i.scdn.co/image/ab67616d00001e0257178b1cfdde2ef00630b6a8"
                      alt="Michael image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                      fairytales
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      STORRY
                    </p>
                  </div>
                  <button
                    style={{
                      padding: "4px",
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <img
                      src={playbutton}
                      alt="Play Button"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </button>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                  <div class="flex-shrink-0">
                    <img
                      class="w-16 h-16"
                      src="https://m.media-amazon.com/images/I/617tul+puvL._UF1000,1000_QL80_.jpg"
                      alt="Lana image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                      The Beach
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      The Neighbourhood
                    </p>
                  </div>
                  <button
                    style={{
                      padding: "4px",
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <img
                      src={playbutton}
                      alt="Play Button"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </button>
                </div>
              </li>
              <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                  <div class="flex-shrink-0">
                    <img
                      class="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                      come out and play
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      Billie Eilish
                    </p>
                  </div>
                  <button
                    style={{
                      padding: "4px",
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    <img
                      src={playbutton}
                      alt="Play Button"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicList;
