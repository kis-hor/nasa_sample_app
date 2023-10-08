import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Betelgeuse = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://www.universetoday.com/wp-content/uploads/2022/07/image_5156_2e-Antares.jpg" alt="Betelgeuse" />
          <span className="flex items-center justify-center text-white">Betelgeuse</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Betelgeuse
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://www.universetoday.com/wp-content/uploads/2022/07/image_5156_2e-Antares.jpg" alt="Betelgeuse" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  Betelgeuse is a prominent and intriguing star located in the constellation of Orion, approximately 642.5 light-years away from Earth. 
                  It is one of the largest and brightest stars in our night sky, easily recognizable as the reddish-orange "shoulder" of Orion the Hunter. 
                  Betelgeuse is a supergiant star nearing the end of its life cycle and is expected to go supernova at some point in the future, although the exact timing remains uncertain.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-3 text-red-300">Betelgeuse</h1>
                    <ul>
                      <li className="mb-5"><strong>Constellation:</strong> Betelgeuse is located in the constellation Orion.</li>
                      <li className="mb-5"><strong>Diameter of Betelgeuse:</strong> Approximately, 1,000 to 1,200 times the diameter of our sun.</li>
                      <li className="mb-5"><strong>Distance from Earth:</strong> The Distance of Betelgeuse from earth is 642.5 light years.</li>
                      <li className="mb-5"><strong>Surface Temperature:</strong> The Surface temperatur of Betelgeuse is 3,500 to 3,600 degree Celsius.</li>
                      <li className="mb-5"><strong>Luminosity:</strong> Variable, but roughly 100,000 times more luminous than the Sun.</li>
                      <li className="mb-5"><strong>Age:</strong> Around 8 to 8.5 million years old.</li>
                      <li className="mb-5"><strong>Mass:</strong> Approximately 10 to 20 times the mass of the Sun.</li>
                      <li className="mb-5"><strong>Notable Characteristics:</strong> One of the largest and brightest stars in the night sky, known for its reddish-orange color; it is a red supergiant nearing the end of its life cycle and is expected to go supernova in the future.</li>
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

export default Betelgeuse;