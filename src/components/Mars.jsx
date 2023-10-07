import { useState } from "react"
import { useNavigate} from "react-router-dom"

const Mars = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }
    
    return(
        <div className="border-4 h-64  bg-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://i.pinimg.com/originals/a6/90/27/a69027eb077be2f6a45399adf6f7bbac.gif" alt="Mars" />
          <span className="flex items-center justify-center text-white">Mars</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto ">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Mars
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://i.pinimg.com/originals/a6/90/27/a69027eb077be2f6a45399adf6f7bbac.gif" alt="Earth" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    Mars is the fourth planet from the sun in our solar system and is often reffered tos as the "Red planet" due to it's reddish appearence, which is caused by iron oxide(rust) on it's surface.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <title>Mars Information</title>
                    <h1 className="text-3xl text-bold mb-3">Mars</h1>
                    <ul>
                      <li><strong>Radius:</strong>Approximately 3,389.5kilometers</li>
                      <li><strong>Distance from the Sun:</strong>Average distance about 227.9 million kilometer</li>
                      <li><strong>Diameter:</strong>Approximately 6,779 kilometers</li>
                      <li><strong>Surface Temperature:</strong>Around -62&deg;celcius</li>
                      <li><strong>Surface Feature:</strong>Mars is known for its diverse surface features, including vast canyons like Valles Marineris, the largest volcano in the solar system, Olympus Mons, and evidence of ancient river valleys and polar ice caps.</li>
                      <li><strong>Rotation:</strong>Approximately 24 hours, 39 minutes and 35.244 second</li>
                      <li><strong>Orbit:</strong>Approximately 687 earth day or about 1.88 earth year</li>
                      <li><strong>Atmosphere:</strong>Mars has very thin atmosphere with a surface pressure averaging about 0.6% of earth atmospheric pressure at sea level.</li>
                      <li><strong>Exploration:</strong>Mars has been extensively explored by spacecraft, with notable missions like NASA’s rovers such as Curiosity and Perseverance, aiming to study its geology, search for signs of past life, and prepare for future human missions.</li>
                    </ul>
                  </p>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600">Cancel</button>
                  <button onClick={() => navigate("/Mars")} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-blue-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-600">View More</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Mars;