import React, { useState, useEffect } from "react";

import axios from "axios"; // Import the axios library

import Footer from "../components/Footer";
import Header from "../components/Header";

const Jupiter = () => {

  // Create state to store the fetched data
  const [images, setImages] = useState([]);

  // Use useEffect to fetch data from the NASA Images API when the component mounts
  useEffect(() => {
    // Define the NASA Images API URL
    const apiUrl = "https://images-api.nasa.gov/search?q=jupiter";

    // Make a GET request to the API
    axios.get(apiUrl)
      .then((response) => {
        // Extract the relevant data from the API response
        const data = response.data.collection.items;

        // Set the fetched data in the state
        setImages(data);
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
                <img className="mx-auto rounded-[30px]" width={"60%"} src="https://noirlab.edu/public/media/archives/images/screen/noirlab2116e.jpg" alt="Earth"/>
            </div>
            <div className="w-2/3 flex items-center flex-col">
                <h1 class= "text-3xl pb-3 text-red-300">Jupiter</h1> 
                <ul className="text-left list-disc">
                <li>Mass: Jupiter is the largest planet in our solar system, boasting an impressive mass of approximately 1.9 x 10^27 kilograms. It dwarfs all other planets and is even more massive than all the other planets in the solar system combined.</li>
                <li>Surface: Unlike terrestrial planets like Earth and Venus, Jupiter doesn't have a solid surface. Instead, it consists primarily of gas and doesn't possess a well-defined solid boundary. The outermost layer of Jupiter is composed mainly of hydrogen and helium, giving it its characteristic gas giant appearance.</li>
                <li>Atmosphere: Jupiter's atmosphere is a complex and dynamic system. It primarily consists of hydrogen (about 75%) and helium (about 24%), with trace amounts of other gases and compounds. The planet's atmosphere hosts striking features such as the Great Red Spot, a massive storm that has been raging for centuries. Jupiter's atmosphere is marked by colorful bands of clouds, with different colors and compositions indicating variations in altitude and temperature.</li>
                <li>Climate: Jupiter's climate is incredibly harsh and turbulent. The planet experiences extreme weather patterns, including powerful storms and lightning, due to its fast rotation and complex atmospheric dynamics. The Great Red Spot is a prime example of this planet's tumultuous weather, with winds that can reach speeds of up to 400 miles per hour (644 kilometers per hour). The planet's massive size also contributes to its intense gravitational forces, creating a challenging environment for exploration.</li>
                <li>Human Population: Jupiter, being a gas giant with no solid surface, is entirely inhospitable to human life. Its extreme atmospheric conditions, intense radiation, and lack of a solid surface make it one of the most hostile places in our solar system. Thus, Jupiter is not considered a potential destination for human colonization or exploration in the same way that terrestrial planets like Earth and Mars are.</li>
                </ul>
            </div>
        </div>

        <div className="px-3">

            <h1 class="text-3xl text-center text-red-300 mt-9 pb-5 justify-center">Satellite of Jupiter</h1>
            <p>There are 95 moons of Jupiter with confirmed orbits as of 23 March 2023.
             This number does not include a number of meter-sized moonlets thought to be shed from the inner moons, nor hundreds of possible kilometer-sized outer irregular moons that were only briefly captured by telescopes. 
             All together, Jupiter's moons form a satellite system called the Jovian system. The most massive of the moons are the four Galilean moons: Io, Europa, Ganymede, and Callisto, which were independently discovered in 1610 by Galileo Galilei and Simon Marius and were the first objects found to orbit a body that was neither Earth nor the Sun. Much more recently, beginning in 1892, dozens of far smaller Jovian moons have been detected and have received the names of lovers (or other sexual partners) or daughters of the Roman god Jupiter or his Greek equivalent Zeus. 
             The Galilean moons are by far the largest and most massive objects to orbit Jupiter, with the remaining 91 known moons and the rings together composing just 0.003% of the total orbiting mass.</p>
        </div>

      <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
        {images.map((item, index) => (
            <div>
            <img
              key={index}
              src={item.links[0].href}
              alt={`Jupiter Image ${index}`}
              style={{ width: "300px", height: "300px", margin: "10px" }}
            />
            <div className="text-white flex justify-center">{item.data[0].title}</div>
            </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Jupiter;
