import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Rigel = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2016/02/rigel.jpg?fit=678,381" alt="Rigel" />
          <span className="flex items-center justify-center text-white">Rigel</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Rigel
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2016/02/rigel.jpg?fit=678,381" alt="Rigel" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  Rigel is a prominent star in the constellation Orion, and it has several important characteristics and points of interest that can be summarized in bullet points:
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-3 text-sky-400">Rigel</h1>
                    <ul>
                      <li className="mb-5"><strong>Name:</strong> Rigel is also known as Beta Orionis, symbolizing its status as the second-brightest star in the constellation Orion.</li>
                      <li className="mb-5"><strong>Brightness:</strong> Rigel is one of the brightest stars in the night sky and is classified as a blue supergiant. It has an apparent magnitude of approximately 0.12, making it the brightest star in the constellation Orion.</li>
                      <li className="mb-5"><strong>Distance:</strong> Rigel is located about 860 light-years away from Earth, making it a relatively distant star.</li>
                      <li className="mb-5"><strong>Color:</strong>  It appears blue-white in color due to its high temperature and spectral classification as a B-type supergiant.</li>
                      <li className="mb-5"><strong>Size:</strong> Rigel is a massive star with a radius estimated to be around 70 times that of the Sun. It is approximately 21 times more massive than the Sun.</li>
                      <li className="mb-5"><strong>Luminosity:</strong>  Rigel is an extremely luminous star, radiating around 120,000 times the luminosity of the Sun.</li>
                      <li className="mb-5"><strong>Binary System:</strong> Rigel is a binary star system, consisting of a primary star (Rigel A) and a companion (Rigel B). Rigel A is the brighter of the two.</li>
                      <li className="mb-5"><strong>Navigation:</strong> Rigel is an important navigational star for observers in the northern hemisphere. It is used as a reference point for locating other celestial objects in the night sky, especially within the constellation Orion.</li>
                      <li className="mb-5"><strong>Cultural Significance:</strong>  Rigel has cultural and historical significance in various civilizations, including ancient Middle Eastern and Greek cultures, where it was associated with the mythology and lore of Orion the Hunter.</li>
                      <li className="mb-5"><strong>Astronomical Studies:</strong>  Astronomers study Rigel to learn more about the life cycle of massive stars, their evolution, and their role in the formation of elements through nuclear fusion.</li>
                      <li className="mb-5"><strong>Future Evolution:</strong> Rigel is expected to eventually end its life in a supernova explosion, which will be a spectacular event visible from Earth.</li>
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

export default Rigel;