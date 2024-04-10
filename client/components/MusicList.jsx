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
        <div className="w-full max-w-md p-4 
        bg-gradient-to-r from-black  via-gray-900 to-gray-800
         rounded-lg shadow sm:p-8 ">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-200 ">
              Playlist
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-gray-300 hover:underline "
            >
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 ">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/659ecd1ba6290d398557da8f/master/pass/Kid-Cudi-Insano.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      Maybe So
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
                      Kid Cudi
                    </p>
                  </div>
                  <button
                    className="hover:scale-110 transition-transform duration-300 ease-in-out"
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
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/641deb27aef545723eec5e31/3:2/w_3000,h_2000,c_limit/Kacey-Musgraves-Golden-Hour.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      The Architect
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
                      Kacey Musgraves
                    </p>
                  </div>
                  <button
                  className="hover:scale-110 transition-transform duration-300 ease-in-out"
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
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://i.scdn.co/image/ab67616d00001e0257178b1cfdde2ef00630b6a8"
                      alt="Michael image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      fairytales
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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
              <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://m.media-amazon.com/images/I/617tul+puvL._UF1000,1000_QL80_.jpg"
                      alt="Lana image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      The Beach
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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


              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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

              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                  <div className="flex-shrink-0">
                    <img
                      className="w-16 h-16"
                      src="https://media.pitchfork.com/photos/608839f84c67840074db8afb/master/pass/Billie-Eilish-Happier-Than-Ever.jpeg"
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-lg font-medium text-gray-200 truncate dark:text-white">
                      come out and play
                    </p>
                    <p className="text-sm text-gray-400 truncate dark:text-gray-400">
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
