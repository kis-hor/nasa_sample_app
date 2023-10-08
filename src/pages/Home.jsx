import Header from "../components/Header";
import Footer from '../components/Footer';
import { useState } from "react";

const Home = () => {
    const [show, setShow] =useState(false);

    const toggleShow = () => {
        setShow(!show);
    }
    return (
        <>
            <Header />
            <div className="bg-cover bg-center h-screen">
                <h1 className="text-white absolute ml-40 mt-[200px] text-7xl font-semibold">
                    Are you lost?
                </h1>
                <h3 className="absolute ml-40 text-xl text-white mt-80 font-thin text-justify">
                    Oops, you were thrown out of the solar system, drifting <br></br> amidst the boundless mysteries of deep space,
                    <br></br>where every star holds an untold story. <br></br>Will you like to experience the solar system with us?
                </h3>
                <p className="text-white absolute text-opacity-5 text-[400px] ml-[870px]">404</p>
                <a onClick={toggleShow} className="text-black bg-white hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 absolute ml-40 mt-[450px]">Explore...</a>
                
                <img className="bg-cover bg-center h-screen w-screen" src="https://w0.peakpx.com/wallpaper/346/240/HD-wallpaper-astronaut-swing-bouquet-space-art-tablet-laptop-background.jpg" alt="Background"></img>
            </div>
            <div
  id="defaultModal"
  tabindex="-1"
  aria-hidden="true"
  className={`${
    show ? "" : "hidden"
  } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}
>
  <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Explore
        </h3>
        <button
        onClick={toggleShow}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="defaultModal"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only" onClick={toggleShow}>Close modal</span>
        </button>
      </div>

      <div className="flex p-6">
        {/* Planet Option */}
        <div className="flex-1">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-white">Planets</h4>
          </div>
          <div className="text-center">
            <a href="/planets">
              <img
                src="/images/planet.jpeg" // Replace with your planet image
                alt="Planet"
                className="w-32 h-32 mx-auto rounded-full"
              />
            </a>
          </div>
        </div>

        {/* Stars Option */}
        <div className="flex-1">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-white">Stars</h4>
          </div>
          <div className="text-center">
            <a href="/stars">
              <img
                src="/images/Emg_SUN.jpeg" // Replace with your star image
                alt="Star"
                className="w-32 h-32 mx-auto rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


            <Footer />
        </>
    )
}

export default Home;