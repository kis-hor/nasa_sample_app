import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sun = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVSK736b5o9hIB2RQazkn9qlcoVi5tJjocnLs6-HHK-a0b07q55rYO_bjg-JA-RyaYpM&usqp=CAU" alt="Sun" />
          <span className="flex items-center justify-center text-white">Sun</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sun
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover rounded-lg h-56 w-auto mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVSK736b5o9hIB2RQazkn9qlcoVi5tJjocnLs6-HHK-a0b07q55rYO_bjg-JA-RyaYpM&usqp=CAU" alt="Sun" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by nuclear fusion reactions at its core. Part of this internal energy is emitted from its surface as light, ultraviolet, and infrared radiation, providing most of the energy for life on Earth.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-5 text-red-300">Sun</h1>
                    <ul>
                      <li className="mb-5"><strong>Radius of Sun:</strong> The Radius of Sun is 6,96,340 km.</li>
                      <li className="mb-5"><strong>Diameter of Sun:</strong> The Diameter of Sun is 1.3927 million km.</li>
                      <li className="mb-5"><strong>Distance from Earth:</strong> The Distance of Sun from Earth is 149.54 million km.</li>
                      <li className="mb-5"><strong>Surface Temperature:</strong> The Surface temperatur of Sun is 10,000&deg;F</li>
                      <li className="mb-5"><strong>Surface Features:</strong> Sunspots, indicators of disturbed magnetic fields, are the most common features seen in the photosphere. Sunspots are generally surrounded by lighter areas called faculae.</li>
                      <li className="mb-5"><strong>Rotation:</strong> The Sun rotates on its axis once in about 27 days.</li>
                      <li className="mb-5"><strong>Orbit:</strong> the Sun takes about 226 million years to orbit the center of our Galaxy, and it orbits at a speed of about 230 km/s.</li>
                      <li className="mb-5"><strong>Atmosphere:</strong>The Sun contains about 92% hydrogen and 8% helium, with just a tiny bit of the other common elements we find on Earth.</li>
                      <li className="mb-5"><strong>Exploration:</strong> NASA’s Parker Solar Probe is studying our star from closer than any previous spacecraft. On Dec. 14, 2021, NASA announced that Parker had flown through the Sun’s upper atmosphere – the corona – the first time in history that a spacecraft had touched the Sun.</li>
                    </ul>
                  </p>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600">Cancel</button>
                  
                 
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Sun;