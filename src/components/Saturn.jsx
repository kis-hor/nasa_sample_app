import { useState } from "react"

const Saturn = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }

    return(
        <div className="border-4 h-64  bg-black" onClick={toggleShow}>
        <img className="object-cover h-56 w-auto mx-auto" src="https://i.pinimg.com/originals/eb/24/09/eb2409fa11b564c90d109813b8cd9533.gif" alt="Saturn" />
          <span className="flex items-center justify-center text-white">Saturn</span>
          <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${show ? "" : " hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur`}>
            <div className="relative w-full max-w-2xl max-h-full h-[50%] mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Saturn
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                <img className="object-cover h-56 w-auto mx-auto" src="https://i.pinimg.com/originals/eb/24/09/eb2409fa11b564c90d109813b8cd9533.gif" alt="Saturn" />
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <ul className="p-4">
                    <p>Saturn is the sixth planet from the sun and the second-largest planet in the solar system. It has a whopping 145 moons. 
                    It's the farthest planet from Earth that's visible to the unaided eye, but the planet's most outstanding features — its rings — are better viewed through a telescope. 
                    Although the other gas giants in the solar system — Jupiter, Uranus and Neptune —  also have rings, Saturn's rings are particularly prominent, earning it the nickname the "<b>Ringed Planet.</b>"</p>
                    

                    <h1 className="text-2xl text-bold mt-3">Saturn</h1>

                    <ul className="pt-4">
                    <li><b>Radius of Planet:</b> It's radius is 58,232 km. It is 9 times wider than the earth.</li>
                    <li><b>Diameter of Planet:</b> It's diameter is 120,536 kilometers. It is 9 times wider than the earth.</li>
                    <li><b>Distance From Sun:</b> It's distance from the sun is 1.4588 billion km, 9.5 astronomical units away from the Sun.</li>
                    <li><b>Surface Temperature:</b> The surface temperature of Saturn is -288 degrees Fahrenheit (- 178 degree celsius).</li>
                    <li><b>Surface features</b>: Saturn is known for its stunning and intricate ring system, composed of countless individual rings made of ice and rock particles.</li>
                    <li><b>Rotation:</b> The Saturn takes 10.7 hours to complete one rotation.</li>
                    <li><b>Orbit:</b> The Saturn makes complete orbit around the sun in about 29.4 Earth Years.</li>
                    <li><b>Atmosphere:</b> Saturn's atmosphere is mostly hydrogen and helium.</li>
                    <li><b>Exploration:</b> Saturn was the most distant of the five planets known to the ancients. In 1610, Italian astronomer Galileo Galilei was the first to gaze at Saturn through a telescope. </li>
                    </ul>
                    {/* <li><strong>--- Saturn Discovery</strong></li>
                    <p>Saturn has been known since ancient times and was observed by cultures all over the world. The planet is visible with the naked eye and to ancient cultures, appeared as a bright light shifting among the stars. There are numerous names and mythologies associated with the planet.
                    The International Astronomical Union, which is the body that represents astronomers around the world, chose the name Saturn to represent the planet. Saturn is associated with the Roman god of agriculture.
                    In Greek mythology, from which the Romans borrowed, Saturn was called Cronus. Saturn/Cronus is most famous for being one of the Titans, a group of gods who fought with the next generation of gods led by Jupiter (in Roman mythology) or Zeus (in Greek mythology). Your culture may have different stories and monikers associated with Saturn, however.</p>
                    
                    <li><strong>--- Saturn's Formation</strong></li>
                    <p>If you're wondering what type of planet is Saturn, it is a gas giant made up mostly of hydrogen and helium. 
                    It's volume is greater than <b>760</b> Earths, and it is the second most massive planet in the solar system, about 95 times Earth's mass.
                    The Ringed Planet is the least dense of all the planets and is the only one less dense than water. 
                    If there were a bathtub big enough to hold it, Saturn would float.The yellow and gold bands seen in Saturn's atmosphere are the result of superfast winds in the upper atmosphere, which can reach up to <b>1,100 mph (1,800 km/h)</b> around its equator, combined with heat rising from the planet's interior.
                    Saturn rotates about once every <b>10.5</b> hours. The planet's high-speed spin causes Saturn to bulge at its equator and flatten at its poles. The planet is around <b>75,000 miles (120,000 kilometers)</b> across at its equator, and <b>68,000 miles (109,000 km)</b> from pole to pole. </p> */}
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

export default Saturn;