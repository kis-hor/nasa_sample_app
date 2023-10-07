import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Uranus = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);    

    const toggleShow = () => {
        setShow(!show)
    }

    return(
        <div className="border-4 h-64 bg-black border-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="../../../images/Uranus.gif" alt="Uranus" />
          <span className="flex items-center justify-center text-white">Uranus</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Uranus
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="../../../images/Uranus.gif" alt="Earth" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                  Uranus is the seventh planet from the Sun and is a gaseous cyan ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles.Uranus has the third-largest diameter and fourth-largest mass among the Solar System's planets. This planet was discoverd by William Herschel in 13 March 1781.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                  <h1 className="text-3xl mb-3">Uranus</h1>
                  <ul>
                      <li><strong>Radius of Uranus:</strong> The radius of Uranus is 25362 km.</li>
                      <li><strong>Diameter of Uranus:</strong> The diameter of Uranus is 50724 km.</li>
                      <li><strong>Distance from Sun:</strong>The distance of Uranus from Sun is 2.935 billion km.</li>
                      <li><strong>Surface Temperature:</strong> The Surface temperature of Uranus is -320&deg;F (-195&deg;C).</li>
                      <li><strong>Surface Features:</strong>  As an ice giant, Uranus doesn't have a true surface. The planet is mostly swirling fluids. While a spacecraft would have nowhere to land on Uranus, it wouldn't be able to fly through its atmosphere unscathed either.</li>
                      <li><strong>Rotation:</strong> When Uranus rotates or spins once, it takes around 17 hours to complete one day on the planet. And it takes Uranus approximately 84 Earth years (30,687 Earth days) to complete one orbit of the Sun (or one year in Uranian time).</li>
                      <li><strong>Orbit:</strong> The orbital period of Uranus is about 84 Earth years.</li>
                      <li><strong>Atmosphere:</strong>Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia.</li>
                      <li><strong>Exploration:</strong> Uranus exploration would also allow us to answer more fundamental questions regarding the formation of the Solar System and how it came to be in its current configuration.</li>
                    </ul>
                  </p>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600">Cancel</button>
                  <button onClick={() => navigate("/uranus")} data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-blue-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-gray-600">View More</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Uranus;