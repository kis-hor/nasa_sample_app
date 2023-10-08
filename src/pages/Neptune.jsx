import React, { useState, useEffect } from "react";

import axios from "axios"; // Import the axios library

import Footer from "../components/Footer";
import Header from "../components/Header";

const Neptune = () => {

  // Create state to store the fetched data
  const [images, setImages] = useState([]);

  // Use useEffect to fetch data from the NASA Images API when the component mounts
  useEffect(() => {
    // Define the NASA Images API URL
    const apiUrl = "https://images-api.nasa.gov/search?q=neptune";

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
                <img className="mx-auto pt-3 rounded-[30px]" width={"80%"} src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/75/ac/2c/shutterstock-521649988.jpg" alt="Uranus"/>
            </div>
            <div className="w-2/3 flex items-center flex-col">
                <h1 class= "text-3xl text-red-300 pb-3">Neptune</h1> 
                <ul className="text-left list-disc">
                <li>Mass: Neptune is the fourth-largest planet by diameter and the eighth most massive planet in our solar system. Its mass is approximately 102.4 times that of Earth.</li>
                <li>Neptune is known as an ice giant and is primarily composed of hydrogen and helium, with trace amounts of other elements such as methane, ammonia, and water.</li>
                <li>Neptune's atmosphere is dynamic and features prominent cloud bands, much like Jupiter and Saturn. The presence of methane in its atmosphere gives it a blue color.</li>
                <li>Neptune has a faint system of rings, which were first discovered in 1984. These rings are much fainter and less prominent than Saturn's rings.</li>
                <li>Neptune has 14 known moons, the largest of which is Triton. Triton is notable for its retrograde orbit, which is opposite to the planet's rotation.</li>
                </ul>
            </div>
        </div>

        <div className="px-32">
          <h1 class="text-3xl text-center text-red-300 mt-9 pb-5">News about Neptune</h1>
          <p class="my-4">The James Webb Telescope captures the clearest views of Neptune in more than 30 years, revealing the icy world in a whole new light</p>
          <p class="my-4">Some of the planet's rings have not been detected since NASA's Voyager 2 became the first spacecraft to observe Neptune in 1989</p>
          <p class="my-4">The new Webb image also clearly shows Neptune's fainter dust bands.</p>
        
        </div>

        <div className="px-32">
          <h1 class="text-3xl text-center text-red-300 mt-9 pb-5">Satellites of Neptune</h1>
          <h2 class="text-3xl text-red-300 mt-5">Triton:</h2>
          <p class="my-4">Triton is the seventh-largest moon in the solar system and the largest of Neptune's 14 known moons. It has a diameter of approximately 2,700 kilometers (1,680 miles). Triton is composed of a mixture of rock and ice, similar to many of the outer solar system's moons.Triton's unique characteristics and geological activity make it an interesting target for future exploration. There have been proposals for missions to study Triton more closely, including the possibility of a dedicated mission to the moon.</p>
          <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://sci.esa.int/sci-images/ee/Voyager_2_Triton_PIA01536_625.jpg" alt="Uranus"/>
        </div>

        <div className="px-32">
          <h2 class="text-3xl text-red-300 mt-9">Proteus:</h2>
          <p class="my-4"> Proteus is one of the largest moons of Neptune and is approximately 420 kilometers (260 miles) in diameter. It is irregularly shaped and heavily cratered. Proteus is primarily composed of water ice and silicate rock.Proteus is a moon that has been relatively well-studied through images captured by the Voyager 2 spacecraft and more recent observations by the Hubble Space Telescope. While it is not as well-known as Triton, it provides valuable insights into the diverse and intriguing moons of the outer solar system.</p>
          <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://4.bp.blogspot.com/_wGaJQqgnWEY/TFRYbqCbqVI/AAAAAAAAATA/O3J8XPPSmD8/s1600/proteusdfull1besthirghresf.png" alt="Proteus:"/>
        </div>

        <div className="px-32">
          <h2 class="text-3xl text-red-300 mt-9">Nereid:</h2>
          <p class="my-4">Nereid is a relatively small moon with an irregular shape. It has a diameter estimated to be about 340 kilometers (211 miles). Nereid is believed to be composed of a mixture of water ice and rock. Little is known about the surface features of Nereid due to its small size and distant location from Earth. Observations have suggested variations in its brightness, which could indicate variations in surface properties or the presence of craters.</p>
          <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://solarstory.net/img/articles/big/neso-celestia.jpg" alt="Neptune"/>
        </div>

        <div className="px-32">
        <h2 class="text-3xl text-red-300 mt-9">Despina:</h2>
        <p class="my-4">Despina is one of the innermost moons of Neptune and orbits the planet at a mean distance of approximately 52,526 kilometers (32,651 miles). It follows a prograde orbit, meaning it orbits Neptune in the same direction as the planet's rotation.Despina's shape is irregular and somewhat elongated, and it does not have a spherical or regular shape.Despina's surface appears relatively smooth, suggesting a lack of significant geological activity or resurfacing processes.</p>
        <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://jundroo.blob.core.windows.net/simplerockets/files/2022/7/6/odVQpq/UserView-0.jpg" alt="Neptune"/>
        </div>
        
        <div className="px-32">
        <h2 class="text-3xl text-red-300 mt-9"> Galatea:</h2>
        <p class="my-4">Galatea is a small moon of Neptune with a somewhat irregular shape. Its estimated diameter is approximately 158 kilometers (98 miles). Galatea is believed to be composed of a mixture of water ice and rocky material.Galatea is known for its role as a shepherd moon for one of Neptune's main rings, the Adams Ring. Its gravitational influence helps maintain the sharp inner edge of the ring by interacting with the ring particles, preventing them from drifting outward.</p>
        <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://i.pinimg.com/originals/cc/0c/e6/cc0ce6fb01ccf9991ba9a3d6431fcfa9.jpg" alt="Uranus"/>
      </div>
        
      {/* Display the fetched images */}
      <h2 className="text-lg">Image Gallery</h2>

      <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
        {images.map((item, index) => (
            <div>
            <img
              key={index}
              src={item.links[0].href}
              alt={`Neptune Image ${index}`}
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

export default Neptune;
