import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Mercury = () => {
  const navigate=useNavigate()
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }

    return (
      <div className="border-4 h-64 bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="/images/Mercury.gif" alt="Mercury" />
        <span className="flex items-center justify-center text-white">Mercury</span>
        <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
          <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Mercury
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
              <img className="object-cover h-56 w-auto mx-auto" src="/images/Mercury.gif" alt="Mercury" />
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                  Mercury, the innermost planet of our solar system, is a small, rocky world with a radius of approximately 2,439.7 kilometers. Unlike many other planets, Mercury has no natural moons. It has been the subject of exploration by spacecraft like Mariner 10 and MESSENGER, offering valuable insights into this intriguing world.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <title>Mercury information</title>
                  <div className="text-3xl text-bold mb-3">Mercury</div>
                  <ul>
                    <li><strong>Radius:</strong>Approximately 2,439.7 kilometers</li>
                    <li><strong>Distance from Sun:</strong>Average distance of about 57.9 million</li>
                    <li><strong>Diameter: </strong>Approximately 4,879 kilometers</li>
                    <li><strong>Surface Temperature:</strong>Extreme variations from -173&deg;C to 427&deg;C</li>
                    <li><strong>Surface Features:</strong>Cratrer-Covered, with extensive plains,cliffs, and a massive canyon called "valls Marineris"</li>
                    <li><strong>Rotation:</strong>Slowest rotation of any planet, taking about 59 Earth days for one day on mercury</li>
                    <li><strong>Orbit:</strong>Shortest orbit around the sun, approximately 88 Earth days</li>
                    <li><strong>Atmosphere:</strong>Extremely thin and composed mainly of oxygen, sodium and hydrogen</li>
                    <li><strong>Moons:</strong>Mercury has no natural moons</li>
                    <li><strong>Exploration:</strong>Visited by spacecraft like Mariner 10 and MESSENGER, providing valuable data about its geology and composition</li>
                  </ul>
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600">Cancel</button>
                  <button onClick={() => navigate("/Mercury")} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-blue-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-600">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Mercury;