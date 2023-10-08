import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Lacerta = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/10_Lacertae_Celestia.jpg/220px-10_Lacertae_Celestia.jpg" alt="10 Lacerta" />
          <span className="flex items-center justify-center text-white">10 Lacerta</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    10 Lacerta
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/10_Lacertae_Celestia.jpg/220px-10_Lacertae_Celestia.jpg" alt="10 Lacerta" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  10 Lacertae (10 Lac) is a star in the constellation Lacerta, 
                   with an apparent magnitude of 4.9. 
                  It is a hot blue main-sequence star of spectral type O9V, a massive star that is currently fusing its core hydrogen.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-3 text-sky-300">10 Lacerta</h1>
                    <ul>
                      <li><strong>Constellation:</strong> 10 Lacertae is situated within the boundaries of the Lacerta constellation, a relatively small and faint constellation in the northern celestial hemisphere.</li>
                      <li><strong>Diameter of Star:</strong> This star is massively big compared to our Sun.</li>
                      <li><strong>Distance from Earth:</strong> The Distance of 10 Lacerta from earth is estimated to be 410 light years.</li>
                      <li><strong>Surface temperature:</strong> 10 Lacerta's surface temperature is estimated to be 35,727 degree Celsius</li>
                      <li><strong>Luminosity:</strong> 10 Lacerta is a bright star as it is fusing its core hydrogen.</li>
                      <li><strong>Age:</strong> This star was recently born but these star do not have a long lifespan.</li>
                      <li><strong>Binary System: </strong> The two stars in the 10 Lacertae system are in a binary orbit around a common center of mass. They complete an orbit over a period of several decades.</li>
                      <li><strong>Spectral Class: </strong> 10 Lacertae is a binary star system with two components. The primary star, 10 Lacertae A, is classified as a K-type giant star, indicating that it is an evolved star in the later stages of its life. The secondary star, 10 Lacertae B, is less massive.</li>
                      <li><strong>Notable Characteristics: </strong>While 10 Lacertae may not be among the most famous stars in the night sky, it is of interest to astronomers due to its binary nature and its role in advancing our understanding of stellar evolution and the dynamics of double star systems.</li>
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

export default Lacerta;