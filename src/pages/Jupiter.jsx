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

      <p>Jupiter</p>
        
      {/* Display the fetched images */}
      <h2 className="text-lg">Image Gallery</h2>

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
