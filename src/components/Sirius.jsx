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
        <img className="object-cover h-56 w-auto mx-auto" src="https://th.bing.com/th/id/R.9916ca14c6aa2c176f18c0ae03773a76?rik=h2UCKXvz1QOh6g&riu=http%3a%2f%2fhybridchildrencommunity.com%2fwp-content%2fuploads%2f2014%2f03%2fSirius_B_by_ApoXile.png&ehk=cg2mxc%2fvU44GVCDq%2fVH9JeG9lgUUlxnf2rZTXpMq3zY%3d&risl=&pid=ImgRaw&r=0" alt="Sirius" />
          <span className="flex items-center justify-center text-white">Sirius</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sirius
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://th.bing.com/th/id/R.9916ca14c6aa2c176f18c0ae03773a76?rik=h2UCKXvz1QOh6g&riu=http%3a%2f%2fhybridchildrencommunity.com%2fwp-content%2fuploads%2f2014%2f03%2fSirius_B_by_ApoXile.png&ehk=cg2mxc%2fvU44GVCDq%2fVH9JeG9lgUUlxnf2rZTXpMq3zY%3d&risl=&pid=ImgRaw&r=0" alt="Sirius" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify"> 
                  Sirius is one of the brightest stars in the night sky, and it has several important characteristics and points of interest that can be summarized in bullet points:
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                    <h1 className="text-3xl mb-3 text-sky-300">Sirius</h1>
                    <ul>
                      <li className="mb-5"><strong>Name:</strong> Sirius is also known as Alpha Canis Majoris, indicating its status as the brightest star in the constellation Canis Major.</li>
                      <li className="mb-5"><strong>Brightness:</strong> It is the brightest star in the night sky with an apparent magnitude of -1.46, making it almost 25 times more luminous than the Sun.</li>
                      <li className="mb-5"><strong>Distance:</strong> Sirius is relatively close to Earth, at a distance of approximately 8.6 light-years, making it one of our nearest stellar neighbors.</li>
                      <li className="mb-5"><strong>Color:</strong> It appears bluish-white in color due to its high temperature and spectral classification as an A-type main-sequence star.</li>
                      <li className="mb-5"><strong>Binary System:</strong> Sirius is a binary star system consisting of two stars: Sirius A and Sirius B. Sirius A is the more massive and brighter component, while Sirius B is a faint white dwarf companion.</li>
                      <li className="mb-5"><strong>Dog Star:</strong>In ancient cultures, Sirius was often referred to as the "Dog Star" because of its prominent position in the constellation Canis Major, which is often depicted as a dog.</li>
                      <li className="mb-5"><strong>Helical Rising:</strong> The heliacal rising of Sirius, its first visible appearance just before sunrise, was used by ancient Egyptians to mark the beginning of the annual flooding of the Nile River, a critical event for their agriculture and calendar.</li>
                      <li className="mb-5"><strong>Navigation:</strong> Sirius is used for navigation in both ancient and modern times. It is part of the Winter Triangle, an asterism that helps observers locate other celestial objects in the winter night sky.</li>
                      <li className="mb-5"><strong>Scientific Studies:</strong>Sirius has been studied extensively by astronomers, and its properties have contributed to our understanding of stellar evolution, binary star systems, and white dwarf stars.</li>
                      <li className="mb-5"><strong>Cultural Significance:</strong>  Sirius has cultural significance in various societies, including ancient Egyptian, Greek, and Indigenous cultures, where it often held a special place in mythology and calendars.</li>
                      <li className="mb-5"><strong>Future Evolution:</strong> Sirius A will eventually exhaust its nuclear fuel and become a white dwarf, while Sirius B has already reached this stage.</li>
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

export default Sirius;