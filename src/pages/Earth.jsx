import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const Earth = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define the NASA Images API URL
    const apiUrl = "https://images-api.nasa.gov/search?q=earth";

    // Make a GET request to the API
    axios.get(apiUrl)
      .then((response) => {
        // Extract the relevant data from the API response
        const data = response.data.collection.items;

        // Set the fetched data in the state
        setImages(data);
        // console.log(images)
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

    return (
        <>
        <Header />
        <div className="flex pt-8">
            <div className="w-1/3 flex justify-center items-center">
                <img className="mx-auto rounded-[30px]" width={"60%"} src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/orbital_debris.jpg?w=1900&h=1944" alt="Earth"/>
            </div>
            <div className="w-2/3 flex items-center flex-col">
                <h1 class= "text-3xl text-red-300 pb-3">Earth</h1> 
                <ul className="text-left list-disc">
                <li>Mass: The mass of Earth is roughly 5.97 × 10^24 kilograms, making it the fifth-largest planet by mass in the solar system.</li>
                <li>Continents: Earth has seven major continents—Africa, Antarctica, Asia, Australia, Europe, North America, and South America.</li>
                <li>Oceans: Earth's oceans include the Pacific, Atlantic, Indian, Southern (or Antarctic), and Arctic oceans.</li>
                <li>Climate: Earth's climate varies from polar at the extremes to tropical in the equatorial regions, influenced by factors like latitude, topography, and ocean currents.</li>
                <li>Human Population: Earth is inhabited by over 7.9 billion people (as of my last knowledge update in September 2021).</li>
                </ul>
            </div>
        </div>

        <div className="px-32">
            <h1 class="text-3xl text-center text-red-300 mt-9 pb-5">What is a Satellite?</h1>
            <li>An object orbiting around the sun, earth or any other colossal body is known as a satellite. There are two major types of categorization when it comes down to satellites, one is natural and the other is man-made.</li>
            <li>Some examples of natural satellites are planets, moons, and comets. Jupiter has 67 natural satellites. The earth has one permanent natural satellite, the moon we know, which causes the tides in the sea. Sometimes other objects (like asteroids) can enter into temporary orbits of the earth and become a natural satellite for a span.</li>
            <li>Apart from these, the earth has many man-made satellites that are placed in the orbit and are used for different applications in communications and information gathering. As the term itself states, an artificial satellite is one that is put in our space by human efforts and follows the orbit of natural satellites.</li>
            <li>Since they have a very large view field, they can collect data a lot faster than instruments that can be used at ground level. Apart from this, their view into space beyond earth is not blocked by clouds, dust, and other obscurities, due to which a satellite can view space a lot more efficiently than telescopes on earth.</li>
            <img className="mx-auto mt-7 rounded-[50px]" width={"60%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavlYWY5W55iH-iEe_Bes1Lx62MdvH4vDnjA&usqp=CAU" alt="Satellite"/>

            <h1 class="text-3xl text-center text-red-300 mt-9 pb-5">Types of Satellites:</h1>
            <h2 class="text-2xl mt-9 pb-5 text-red-300">Geostationary Satellite:</h2>
            <p>These satellites are placed into orbit at a distance of around 35,800 km from the earth’s surface. They rotate in the same direction as the earth and one revolution of such satellites is the same as one day on earth (roughly 24 hours). This means that, as seen from earth, these satellites will appear to be at the same spot throughout. Hence, the name “geostationary” satellites. These satellites are used as communication satellites and for weather-based applications.</p>
            <h2 class="text-2xl mt-9 pb-5 text-red-300">Polar Satellite:</h2>
            <p>Polar satellites revolve around the earth in a north-south direction around the earth as opposed to east-west like the geostationary satellites. They are very useful in applications where the field vision of the entire earth is required in a single day. Since the entire earth moves below them, this can be done easily. They are used in weather applications where predicting weather and climate-based disasters can be done in a short time. They are also used as relay stations.</p>

            <h1 class="text-3xl text-center text-red-300 mt-9 pb-5">Satellite of Earth: Moon</h1>
            <p>The Moon is Earth's only natural satellite. It orbits around Earth at an average distance of 384400 km (238900 mi; 1.28 ls), or about 30 times Earth's diameter. The Moon faces Earth always with its near side by having a rotation period that equals its orbital period, resulting from being tidally locked to Earth. This period is in relation to the Sun 29.5 days long and visible as the cycle of the lunar phases. For Earth, the Moon has been aside from the Sun the most influential celestial object, particularly with its gravitational influence it has been the main driver of Earth's tides.</p>
            <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAhaGdVIBqigI7lTwv2C3w_GEiBNNJa_1D8uu-peYHytLV6NqAZE4OyeyHB5mMJGPf1g&usqp=CAU" alt="Moon"/>
        </div>

        
        <div className="text-center text-3xl pb-5">Images from Nasa</div>
        <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
            {images.map((item, index) => (
                (item.links !== undefined) ? (
                    <div>
                    {console.log(item.links[0])}
                    <img
                    key={index}
                    src={item.links[0].href}
                    alt={`Earth Image ${index}`}
                    style={{ width: "300px", height: "300px", margin: "10px" }}
                    />
                    <div className="text-white flex justify-center">{item.data[0].title}</div>
                    </div>
                ) : null
            ))}
        </div>
        <Footer />
        </>
    )
}

export default Earth;