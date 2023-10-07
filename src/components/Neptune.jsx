import { useState } from "react"

const Neptune = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }

    return (
        <div className="border-4 h-64  bg-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://i.pinimg.com/originals/3c/96/11/3c961145db8f60b5a286f676e3822bf0.gif" alt="Neptune" />
          <span className="flex items-center justify-center text-white">Neptune</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto ">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Neptune
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/330px-The_Blue_Marble_%28remastered%29.jpg" alt="Earth" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    
                    Neptune is the eighth and farthest known planet from the Sun in our solar system.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <title>Neptune Information</title>
                    <h1 className="text-3xl text-bold mb-3">Neptune</h1>
                    <ul>
                      <li><strong>Radius:</strong>Approximately 24,622 kilometers</li>
                      <li><strong>Distance from the Sun:</strong>Average distance of about 4.5 billion kilometers</li>
                      <li><strong>Diameter:</strong>Approximately 49,244 kilometers</li>
                      <li><strong>Surface Temperature:</strong>Extremely cold, averaging around -214&deg;C</li>
                      <li><strong>Surface Feature:</strong>Neptune's surface is primarily composed of gases, with no solid surface visible. It's known for its stunning blue color due to the presence of methane in its atmosphere.</li>
                      <li><strong>Rotation:</strong>Neptune has a rapid rotation, completing one day in about 16 hours and 6 minutes.</li>
                      <li><strong>Orbit:</strong>Neptune has a long orbit around the sun, taking approximately 165 earth day to complete one orbit.</li> 
                      <li><strong>Atmosphere:</strong>It has a thick atmosphere primarily composed of hydrogen, helium, and methane.</li> 
                      <li><strong>Exploration:</strong>Neptune has been primarily studied from a far by telescopes and spacecraft like voyager 2, providing valuable insights into this distant ice gaint.</li>                  
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

export default Neptune;