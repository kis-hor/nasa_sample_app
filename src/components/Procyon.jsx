import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Procyon = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/B-type_main_sequence_star_1.png/800px-B-type_main_sequence_star_1.png" alt="Earth" />
          <span className="flex items-center justify-center text-white">Procyon</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Procyon
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/B-type_main_sequence_star_1.png/800px-B-type_main_sequence_star_1.png" alt="Earth" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  Procyon is the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky, with an apparent visual magnitude of 0.34.It has the Bayer designation α Canis Minoris, which is Latinized to Alpha Canis Minoris, and abbreviated α CMi or Alpha CMi, respectively.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-3 text-blue-300">Procyon</h1>
                    <p className="mb-5">It is one of the brightest stars in the night sky and is notable for being the eighth-brightest star as seen from Earth.Here are some key facts about Procyon:</p>
                    <ul>
                      <li className="mb-5"><strong>Binary Star System:</strong> Procyon is a binary star system, meaning it consists of two stars orbiting a common center of mass. The primary star, Procyon A, is a white-yellowish main-sequence star, and the secondary star, Procyon B, is a faint white dwarf.</li>
                      <li className="mb-5"><strong>Procyon A:</strong> Procyon A is the brighter of the two stars in the system. It is a type F5IV-V main-sequence star, which means it is similar to the Sun in terms of spectral class and evolutionary stage. Procyon A is about 1.5 times the mass of the Sun and shines with about 6.93 times the Sun's luminosity.</li>
                      <li className="mb-5"><strong>Procyon B:</strong> Procyon B is a white dwarf star, which is a remnant of a star that has exhausted its nuclear fuel. It is significantly fainter and smaller than Procyon A. The white dwarf is thought to be a former main-sequence star that has exhausted its nuclear fuel and shed its outer layers, leaving behind a dense core.</li>
                      <li className="mb-5"><strong>Distance and Location:</strong> Procyon is located about 11.46 light-years away from Earth, making it one of the closest known stars to the Sun. It is part of the winter constellation Canis Minor and is visible from both the Northern and Southern Hemispheres.</li>
                      <li className="mb-5"><strong>Brightness and Visibility:</strong> Procyon is the brightest star in the constellation Canis Minor and is one of the brightest stars in the night sky. It is easily visible to the naked eye and can be seen from urban areas with moderate light pollution.</li>
                      <li className="mb-5"><strong>Historical and Cultural Significance:</strong> The name "Procyon" is derived from the Greek words "prokyon" or "prokyonos," which means "before the dog," referring to its position relative to the star Sirius, also known as the Dog Star. In ancient times, these stars were used for navigation and were important markers in the night sky.</li>
                      <li className="mb-5"><strong>Observations and Studies:</strong> Procyon has been extensively studied by astronomers and is a subject of ongoing research to understand its properties, evolution, and its binary system dynamics. It's also used as a calibration star in various astronomical observations.</li>
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

export default Procyon;