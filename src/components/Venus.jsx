import { useState } from "react"
import {useNavigate} from "react-router-dom"
const Venus = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="/images/Venus.gif" alt="Venus" />
          <span className="flex items-center justify-center text-white">Venus</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Venus
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="/images/Venus.gif" alt="Venus" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                  Venus is one of the four terrestrial planets in the Solar System, meaning that it is a rocky body like Earth.
                  It is similar to Earth in size and mass and is often described as Earth's "sister" or "twin". Venus is close to spherical due to its slow rotation.
                  As Venus is the hottest planet in the solar system, it has an active surface, including volcanoes. </p>
                  <p  className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl text-bold mb-3">Venus</h1>
                  <ul>
                    <li><strong>Radius of Planet </strong> : Venus has a radius of approximately 6,052 kilometers.</li>
                    <li><strong>Diameter of Planet </strong>: The diameter of Venus is about 12,104 kilometers.</li>
                    <li><strong>Distance from Sun </strong> : Venus orbits the Sun at an average distance of about 108.2 million kilometers.</li>
                    <li> <strong>Surface temperature </strong> : Venus has an extremely hot surface, with temperatures that can soar to around 467 degrees Celsius.</li>
                    <li><strong>Surface feature </strong>: Venus has a harsh and inhospitable surface with numerous volcanic plains, highland regions, and vast lava fields.</li>
                    <li><strong>Rotation </strong>: Venus has a peculiar rotation pattern known as retrograde rotation. It rotates on its axis in the opposite direction to most planets, including Earth. </li>
                    <li><strong>Orbit </strong>: Venus follows an elliptical orbit around the Sun, which means its distance from the Sun varies slightly during its orbit.</li>
                    <li><strong>Atmosphere </strong>: Venus has a thick and dense atmosphere composed primarily of carbon dioxide (about 96.5%), with traces of nitrogen and sulfur dioxide.</li>
                    <li><strong>Exploration </strong>: Venus has been explored by several spacecraft.</li>
                    </ul>
                   </p>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600">Cancel</button>
                  <button onClick={() => navigate("/venus")} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-blue-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-600">View More</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Venus;