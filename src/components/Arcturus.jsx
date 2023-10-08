import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sirius = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://th.bing.com/th/id/R.e28d16aa06ebc6926ee856532c5f865b?rik=Zyfunj3BdQkARQ&pid=ImgRaw&r=0" alt="Arcturus" />
          <span className="flex items-center justify-center text-white">Sirius</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Arcturus
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://th.bing.com/th/id/R.e28d16aa06ebc6926ee856532c5f865b?rik=Zyfunj3BdQkARQ&pid=ImgRaw&r=0" alt="Arcturus" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  Arcturus is a notable star in the night sky, and here are some important points about it in bullet form:
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-3 text-orange-500">Arcturus</h1>
                    <ul>
                      <li><strong>Name:</strong> Arcturus is also known as Alpha Boötis, signifying its status as the brightest star in the constellation Boötes.</li>
                      <li><strong>Brightness:</strong> It is the fourth-brightest star in the night sky, with an apparent magnitude of approximately -0.05, making it one of the most prominent stars visible from Earth.</li>
                      <li><strong>Distance:</strong> Arcturus is relatively close to us, located at a distance of about 36.7 light-years from Earth.</li>
                      <li><strong>Color:</strong> It appears distinctly orange or red-orange due to its spectral classification as a K-type giant or subgiant star.</li>
                      <li><strong>Size:</strong> Arcturus is a large star with a radius estimated to be around 25 times that of the Sun.</li>
                      <li><strong>Luminosity:</strong> It is moderately luminous, radiating around 170 times the luminosity of the Sun.</li>
                      <li><strong>Proper Motion:</strong> Arcturus has a relatively high proper motion, which means it moves noticeably against the background of more distant stars over time.</li>
                      <li><strong>Navigation:</strong> Arcturus is a prominent navigational star and is often used for celestial navigation. It is part of the "Spring Triangle" asterism, along with Spica and Regulus.</li>
                      <li><strong>Astronomical Studies:</strong> Arcturus has been studied by astronomers to understand its properties and evolution as a giant star.</li>
                      <li><strong>Cultural Significance:</strong> In various cultures, Arcturus has been recognized and featured in mythology and folklore. For example, it was associated with the Greek mythological figure Boötes, the herdsman.</li>
                      <li><strong>Future Evolution:</strong> Arcturus is nearing the end of its life cycle and is expected to evolve into a red giant star before eventually shedding its outer layers and becoming a white dwarf.</li>
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

export default Arcturus;