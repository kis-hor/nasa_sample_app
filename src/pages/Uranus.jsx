import React, { useState, useEffect } from "react";

import axios from "axios"; // Import the axios library

import Footer from "../components/Footer";
import Header from "../components/Header";

const Uranus = () => {

  // Create state to store the fetched data
  const [images, setImages] = useState([]);

  // Use useEffect to fetch data from the NASA Images API when the component mounts
  useEffect(() => {
    // Define the NASA Images API URL
    const apiUrl = "https://images-api.nasa.gov/search?q=uranus";

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
                <img className="mx-auto pt-3 rounded-[30px]" width={"80%"} src="https://t3.ftcdn.net/jpg/00/33/48/46/360_F_33484692_nK6mx4zVg2FzGu6GOklPshaOvATNtHUX.jpg" alt="Uranus"/>
            </div>
            <div className="w-2/3 flex items-center flex-col">
                <h1 class= "text-3xl text-red-300 pb-3">Uranus</h1> 
                <ul className="text-left list-disc">
                <li>Mass: It has a mass roughly 14.5 times that of Earth.</li>
                <li>Uranus is primarily composed of rock and various ices, including water, ammonia, and methane.</li>
                <li>Uranus has a thick atmosphere consisting mostly of hydrogen and helium, along with a higher proportion of ices compared to Jupiter and Saturn.</li>
                <li>Uranus has a system of faint rings, discovered in 1977. The rings are mostly composed of dark particles, and the system consists of 13 known rings.</li>
                <li>Uranus has a highly tilted rotational axis, tilted at about 98 degrees compared to its orbit around the Sun. This extreme tilt gives Uranus its unique appearance.</li>
                </ul>
            </div>
        </div>

        <div className="px-32">
          <h1 class="text-3xl text-center text-red-300 mt-9 pb-5">Overview</h1>
          <p class="my-4">Uranus is very cold and windy. It is surrounded by faint rings and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.</p>
          <p class="my-4">Uranus is blue-green in color due to large amounts of methane, which absorbs red light but allows blues to be reflected back into space. The atmosphere is mostly hydrogen and helium, but also includes large amounts of water, ammonia and methane.</p>
          <p class="my-4">Astronomer William Herschel tried unsuccessfully to name his discovery Georgium Sidus after his patron, English king George III. Instead, the planet was eventually named for Uranus, the Greek god of the sky, who was also the father of Kronos (or Saturn in Roman mythology).</p>
        </div>

        <div className="px-32">
          <h1 class="text-3xl text-center text-red-300 mt-9 pb-5">Satellites of Uranus</h1>
          <h2 class="text-3xl text-red-300 mt-5">Miranda:</h2>
          <p class="my-4">Miranda is one of the moons of Uranus, the seventh planet from the Sun.Miranda is relatively small, with a diameter of approximately 472 kilometers (294 miles). This makes it the smallest of Uranus' five major moons.It is composed of a mix of water ice and rocky material. Its surface is believed to be composed of water ice, which is rich in organic compounds and is geologically diverse.Miranda orbits Uranus at an average distance of about 129,800 kilometers (80,640 miles).</p>
          <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://upload.wikimedia.org/wikipedia/commons/e/e1/PIA18185_Miranda%27s_Icy_Face.jpg" alt="Uranus"/>
        </div>

        <div className="px-32">
          <h2 class="text-3xl text-red-300 mt-9">Ariel:</h2>
          <p class="my-4">Ariel is one of the major moons of Uranus, the seventh planet from the Sun. It is the fourth-largest moon of Uranus.It has a diameter of approximately 1,158 kilometers (720 miles), making it the fourth-largest moon of Uranus.It is composed primarily of water ice, and like many of Uranus' moons, it likely contains a small rocky core.Ariel orbits Uranus at an average distance of about 191,200 kilometers (118,884 miles).Ariel has a moderately low albedo, meaning it reflects a relatively small amount of sunlight. Its coloration is pale yellow or gray.</p>
          <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://media.sciencephoto.com/image/c0554514/800wm/C0554514-Ariel-1_satellite,_illustration.jpg" alt="Uranus"/>
        </div>

        <div className="px-32">
          <h2 class="text-3xl text-red-300 mt-9">Umbriel:</h2>
          <p class="my-4">Umbriel is one of the major moons of Uranus, the seventh planet from the Sun. It is the third-largest moon of Uranus.Umbriel has a diameter of approximately 1,169 kilometers (727 miles), making it the third-largest moon of Uranus.It is primarily composed of water ice and rock, and like many of Uranus' moons, it likely contains a small rocky core.Umbriel orbits Uranus at an average distance of about 266,000 kilometers (165,300 miles).It has a nearly circular orbit and takes about 4.1 Earth days to complete one orbit around Uranus. </p>
          <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Umbriel_usgsx2.jpg/220px-Umbriel_usgsx2.jpg" alt="Uranus"/>
        </div>

        <div className="px-32">
        <h2 class="text-3xl text-red-300 mt-9">Titania:</h2>
        <p class="my-4">Titania is one of the major moons of Uranus, the seventh planet from the Sun in our solar system. It is the largest moon of Uranus and the eighth largest moon in the solar system.Titania has a diameter of approximately 1,578 kilometers (981 miles), making it the largest moon of Uranus. Its composition is believed to be primarily composed of water ice and rocky materials.Titania orbits Uranus at an average distance of about 435,910 kilometers (271,170 miles) and takes approximately 8.7 days to complete one orbit.</p>
        <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://media.istockphoto.com/id/1318856449/video/titania-moon-natural-satellite-of-uranus-planet-in-the-outer-space.jpg?s=640x640&k=20&c=pJFoRMffdmXUivTm4FwjPGg5i3fO0QoZ6y3dReWgaQM=" alt="Uranus"/>
        </div>
        
        <div className="px-32">
        <h2 class="text-3xl text-red-300 mt-9"> Oberon:</h2>
        <p class="my-4">Oberon is one of the major moons of Uranus, the seventh planet from the Sun in our solar system. It is the second largest moon of Uranus and the ninth largest moon in the solar system.Oberon has a diameter of approximately 1,523 kilometers (946 miles), making it the second largest moon of Uranus after Titania. Its composition is believed to be primarily a mix of water ice and rocky materials.Oberon orbits Uranus at an average distance of about 583,520 kilometers (362,300 miles) and takes approximately 13.5 days to complete one orbit.</p>
        <img className="mx-auto mt-9 rounded-lg" width={"40%"} src="https://www.shutterstock.com/shutterstock/videos/1080318179/thumb/1.jpg?ip=x480" alt="Uranus"/>
        </div>
      {/* Display the fetched images */}
      <h1 className="text-3xl text-center mt-8 mb-4">Images From NASA</h1>

      <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
        {images.map((item, index) => (
            <div>
            <img
              key={index}
              src={item.links[0].href}
              alt={`Uranus Image ${index}`}
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

export default Uranus;
