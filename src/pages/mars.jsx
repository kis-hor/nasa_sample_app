import React, { useState, useEffect } from "react";

import axios from "axios"; // Import the axios library

import Footer from "../components/Footer";
import Header from "../components/Header";

const Mars = () => {

  // Create state to store the fetched data
  const [images, setImages] = useState([]);

  // Use useEffect to fetch data from the NASA Images API when the component mounts
  useEffect(() => {
    // Define the NASA Images API URL
    const apiUrl = "https://images-api.nasa.gov/search?q=mars";

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
        <p className="px-32 pt-9">
        Mars is a fascinating planet with a unique set of characteristics and a history of scientific exploration. It continues to capture the imagination of scientists and space enthusiasts as a potential future destination for human exploration and, possibly, colonization. Mars has two small natural satellites, Phobos and Deimos. These moons are much smaller and less massive than Earth's Moon and have some unique characteristics: 
        </p>
        <div className="flex my-8 px-32">
            <div className="w-2/3 flex items-center justify-center">
                <img className="rounded-[50px]"  width={'50%'} src="https://th.bing.com/th/id/R.db54deb57ababf337ce1fa161a2697d4?rik=nETPCmlVg3pw4w&riu=http%3a%2f%2fplanetary.s3.amazonaws.com%2fimage%2fPSP_007769_9010_IRB_180.jpg&ehk=J9e8404Q1hExhn6wqt5%2bqu9vwTy80tDd4wzHmZVH%2fZY%3d&risl=&pid=ImgRaw&r=0" alt="phobos" />
            </div>
            <div className="w-2/3 flex items-center flex-col justify-center">
                <h1 class="text-2xl text-red-300 mt-9 pb-5">Phobos:</h1>
                <ul className="text-left list-disc">
                    <li>Phobos is the larger and closer of the two Martian moons, with a mean radius of approximately 11.1 kilometers (6.9 miles).</li>
                    <li>It orbits Mars at a very close distance, with an average orbital radius of about 9,378 kilometers (5,827 miles).</li>
                    <li>Phobos is irregularly shaped and appears to be heavily cratered.</li>
                    <li>Its name, "Phobos," is derived from the Greek word for "fear" and is one of the sons of Ares (Mars) in Greek mythology.</li>
                    <li>Phobos orbits Mars faster than the planet rotates, which means it rises in the west and sets in the east, with each Martian day (sol) being shorter than the moon's orbital period.</li>
                </ul>
            </div>
        </div>
        <div className="flex px-32">
            <div className="w-2/3 flex items-center flex-col justify-center">
                <h1 class="text-2xl text-red-300 mt-9 pb-5">Deimos:</h1>
                <ul className="text-left list-disc ml-12" id="left-text">
                    <li>Deimos is the smaller and more distant of Mars' two moons, with a mean radius of approximately 6.2 kilometers (3.9 miles).</li>
                    <li>It orbits Mars at a greater distance than Phobos, with an average orbital radius of about 23,460 kilometers (14,580 miles).</li>
                    <li>Deimos is also irregularly shaped and is covered in craters.</li>
                    <li>Its name, "Deimos," is derived from the Greek word for "dread" and is another son of Ares (Mars) in Greek mythology.</li>
                    <li>Deimos orbits Mars more slowly than the planet rotates, so it rises in the east and sets in the west, similar to the motion of celestial objects in the night sky on Earth.</li>
                </ul>
            </div>
            <div className="w-2/3 flex items-center justify-center">
                <img className="rounded-[50px]" width={'50%'} src="https://th.bing.com/th/id/R.e4ede44013b3862492ae70d3a43b98b2?rik=c2C8wyPbapWVOw&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20121010154526%2fspace%2fimages%2f7%2f7a%2fDeimos.jpg&ehk=sWXq8bLT2VNSg8hcNr%2fRRyy3bjJKNB5HmT1AaK4XTtA%3d&risl=&pid=ImgRaw&r=0" alt="Deimos" />
            </div>
        </div>
        <div className="px-12 mt-6 pt-5 px-32">
            <h2 className="bg-red-400 text-white text-center w-1/2 mx-auto">Other Interesting Facts</h2>
            <ul className="border-2 py-5 mb-5 mx- list-disc px-10">
                <li>Mars: The Red Planet, Or Just a Gaint Dust Bunny?</li>
                    <p>Mars is often called the "Red Planet" because of its distinctive reddish hue. But really, it's just a cosmic cleaning nightmare, constantly attracting interstellar dust with its magnetic personality.</p>
                <li>Martian Traffic Congestion:</li>
                    <p>Mars is often called the "Red Planet" because of its distinctive reddish hue. But really, it's just a cosmic cleaning nightmare, constantly attracting interstellar dust with its magnetic personality.</p>
                <li>Mars:The Ultimate Desert Gateaway:</li>
                    <p>Looking for a peaceful vacation spot? Mars offers the ultimate desert getaway. Enjoy the serene landscapes, 100% natural lack of Wi-Fi, and a daily dose of deadly cosmic radiation!</p>
                <li>Mount Olympus:</li>
                    <p>Mars boasts the tallest volcano in the solar system, Mount Olympus. Climbing it is a great way to work off those interplanetary calories, but be prepared for the thin air and lava pools!</p>
                <li>Mars' Inexplicable Pop Culture Influence:</li>
                    <p>Mars is so famous that even Earth's candy bar, the Mars Bar, decided to name itself after the planet. Apparently, Mars really knows how to make a celestial impression.</p>
            </ul>
        </div>
        {/* Display the fetched images */}
        <div className="text-center text-3xl pb-5">Images from Nasa</div>
  
        <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
            {images.map((item, index) => (
                (item.links !== undefined) ? (
                    <div>
                    {console.log(item.links[0])}
                    <img
                    key={index}
                    src={item.links[0].href}
                    alt={`Mars Image ${index}`}
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

export default Mars;