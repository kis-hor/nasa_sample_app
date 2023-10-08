import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"; // Import the axios library

import Footer from "../components/Footer";
import Header from "../components/Header";

const Venus = () => {
  // Create state to store the fetched data
  const [images, setImages] = useState([]);

  // Use useEffect to fetch data from the NASA Images API when the component mounts
  useEffect(() => {
    // Define the NASA Images API URL
    const apiUrl = "https://images-api.nasa.gov/search?q=venus";

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
                <img className="mx-auto rounded-[30px]" width={"60%"} src="https://media.wired.com/photos/5e59ad2b79c7100008eb6ae8/1:1/w_2000,h_2000,c_limit/photo_space_venus_1_S91-50688.jpg" alt="Earth"/>
            </div>
            <div className="w-2/3 flex items-center flex-col">
                <h1 class= "text-3xl pb-3 text-red-300">Venus</h1> 
                <ul className="text-left list-disc">
                <li>Mass:  Venus has a mass of approximately 4.87 x 10^24 kilograms, making it the second-largest terrestrial (rocky) planet in our solar system, after Earth.</li>
                <li>Surface:  Venus is known for its harsh and inhospitable surface. It is covered in thick clouds of sulfuric acid, which create a yellowish appearance. The planet's surface is extremely hot, with temperatures that can exceed 900 degrees Fahrenheit (475 degrees Celsius), making it the hottest planet in our solar system due to its thick greenhouse atmosphere.</li>
                <li>Atmosphere: Venus has a dense and predominantly carbon dioxide (CO2) atmosphere with traces of other gases. It experiences extreme surface pressure, which is approximately 92 times greater than Earth's surface pressure. The thick atmosphere traps heat, contributing to its scorching surface temperatures.</li>
                <li>Climate: Venus has a harsh and inhospitable climate due to its thick atmosphere and extreme surface temperatures. The planet experiences constant cloud cover, with sulfuric acid clouds reflecting sunlight back into space.</li>
                <li>Human Population: Due to its extreme surface conditions, Venus is considered one of the least likely places to find life in our solar system. The planet's surface is not conducive to the existence of life as we know it.</li>
                </ul>
            </div>
        </div>

        <div className="px-32">

            <h1 class="text-3xl text-center text-red-300 mt-9 pb-5 justify-center">Satellite of Venus</h1>
            <p>Venus, Earth's "sister" planet, is notable for being the only planet in our solar system that doesn't have any natural moons or satellites. Unlike Earth, which has one large natural satellite (the Moon) and other planets like Mars, Jupiter, and Saturn that boast multiple moons, Venus orbits the Sun without any companions in its vicinity.
              The absence of moons around Venus has intrigued scientists and astronomers. While the exact reasons for Venus's lack of moons remain a subject of study and debate, several factors could contribute to this phenomenon.</p>
        </div>

      <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
        {images.map((item, index) => (
            <div>
            <img
              key={index}
              src={item.links[0].href}
              alt={`Venus Image ${index}`}
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

export default Venus;
