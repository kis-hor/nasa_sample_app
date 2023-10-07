import { useState } from "react";

const Earth = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="../../../images/Earth.gif" alt="Earth" />
          <span className="flex items-center justify-center text-white">Earth</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Earth
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="../../../images/Earth.gif" alt="Earth" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water.Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's surface. The remaining 29.2% of Earth's surface is land, most of which is located in the form of continental landmasses within one hemisphere, Earth's land hemisphere.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-3">Earth</h1>
                    <ul>
                      <li><strong>Radius of Earth:</strong> The Radius of Earth is 6371 km.</li>
                      <li><strong>Diameter of Earth:</strong> The Diameter of Earth is 12742 km.</li>
                      <li><strong>Distance from Sun:</strong> The Distance of Earth from Sun is 149.54 million km.</li>
                      <li><strong>Surface Temperature:</strong> The Surface temperatur of Earth is -59&deg;F(15&deg;C)</li>
                      <li><strong>Surface Features:</strong> Surface features are landforms and bodies of water that cover the Earth's surface such as mountains, valleys, canyons, gorges, beaches, sand dunes, barrier Islands, flood-plains.</li>
                      <li><strong>Rotation:</strong> Earth rotates around its axis at a rate of about 1,600 kilometers (1,000 miles) an hour. It revolves around the sun at a rate of 107,800 kilometers (67,000 miles) an hour.</li>
                      <li><strong>Orbit:</strong> The orbital period of Earth is 365 days.</li>
                      <li><strong>Atmosphere:</strong>Earth's atmosphere is composed of about 78% nitrogen, 21% oxygen and 1% of another gases.</li>
                      <li><strong>Exploration:</strong> Exploration of Earth involves studying and investigating various aspects of our planet, ranging from its surface features to its atmosphere, oceans, ecosystems, and geological processes. It encompasses scientific research, environmental monitoring, mapping, and understanding the Earth's history and its current state.</li>
                    </ul>
                  </p>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600">Cancel</button>
                  <button onClick={() => navigate("/saturn")} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-blue-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-600">View More</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Earth;