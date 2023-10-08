import React, { useState, useEffect } from "react";
import axios from "axios"; // Import the axios library

import Footer from "../components/Footer";
import Header from "../components/Header";

const Saturn = () => {
  // Create state to store the fetched data
  const [images, setImages] = useState([]);

  // Use useEffect to fetch data from the NASA Images API when the component mounts
  useEffect(() => {
    // Define the NASA Images API URL
    const apiUrl = "https://images-api.nasa.gov/search?q=saturn";

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
        <h2 className="text-3xl text-orange-500 mt-4 text-center mb-3">Saturn</h2>
      <p className="mx-4">The modern names for Saturnian moons were suggested by John Herschel in 1847. 
        He proposed to name them after mythological figures associated with the Roman god of agriculture and harvest, Saturn (equated to the Greek Cronus).
        In particular, the then known seven satellites were named after Titans, Titanesses and Giants—brothers and sisters of Cronus.
        The idea was similar to Simon Marius' mythological naming scheme for the moons of Jupiter. Saturn has the largest number of satellites among them these are some examples with their Name, Diameter, Mass in kg and Orbital Radius in this table: </p>

        <table class="table-auto border border-collapse border-slate-500 mx-4 mt-6 mb-6 text-center">
            <thead>
                <tr>
                    <th  className="border border-slate-600">Name</th>
                    <th className="border border-slate-600">Diameter(km)</th>
                    <th className="border border-slate-600">Mass(kg)</th>
                    <th className="border border-slate-600">Orbital Radius</th>
    
                </tr>
                <tr>
                <td className="border border-slate-600">Mimas</td>
                <td className="border border-slate-600">396(0.12 D☾)</td>
                <td className="border border-slate-600">4×10<sup>19</sup>(0.0005 M☾)</td>
                <td className="border border-slate-600">185,539(0.48 a☾)</td>
               
               
               
               
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border border-slate-600">Enceladus</td>
                <td className="border border-slate-600">504(0.14 D☾)</td>
                <td className="border border-slate-600">1.1×10<sup>20</sup>(0.002 M☾)</td>
                <td className="border border-slate-600">237,948(0.62 a☾)</td>
                
                
                
                
                

                </tr>
                <tr>
                <td className="border border-slate-600">Tethys</td>
                <td className="border border-slate-600">1,062(0.30 D☾)</td>
                <td className="border border-slate-600">6.2×10<sup>20</sup>(0.008 M☾)</td>
                <td className="border border-slate-600">294,619(0.77 a☾)</td>

                
                
                
                
                </tr>
                <tr>
                <td className="border border-slate-600">Dione</td>
                <td className="border border-slate-600">1,123(0.32 D☾)</td>
                <td className="border border-slate-600">1.1×10<sup>21</sup>(0.015 M☾)</td>
                <td className="border border-slate-600">377,396(0.98 a☾)</td>

                
                
                
                </tr>
                <tr>
                <td className="border border-slate-600">Rhea</td>
                <td className="border border-slate-600">1,527(0.44 D☾)</td>
                <td className="border border-slate-600">2.3×<sup>1021</sup>(0.03 M☾)</td>
                <td className="border border-slate-600">527,108(1.37 a☾)</td>
                </tr>

                <tr>
                <td className="border border-slate-600">Titan</td>
                <td className="border border-slate-600">5,149(1.48 D☾)(0.75 D♂)</td>
                <td className="border border-slate-600">1.35×10<sup>23</sup>(1.80 M☾)(0.21 M♂)</td>
                <td className="border border-slate-600">1,221,870(3.18 a☾)</td>
                </tr>

                <tr>
                <td className="border border-slate-600">Lapetus</td>
                <td className="border border-slate-600">1,470(0.42 D☾)</td>
                <td className="border border-slate-600">1.8×10<sup>21</sup>(0.025 M☾)</td>
                <td className="border border-slate-600">3,560,820(9.26 a☾)</td>

                </tr>
            </tbody>
        </table>
        <div className="border border-2 border-red-900 mx-4 pt-3 pb-12">
            <h1 className="text-2xl text-center text-orange-500 pb-3">Saturn Important Details: </h1>
        <ul className="text-left list-disc mx-4">
           <li> Saturn's moons exhibit a fascinating diversity in their characteristics, from small, cratered bodies like Mimas to massive worlds like Titan, with its thick atmosphere and methane lakes. Each of these moons adds to the wonder of Saturn's planetary system.</li>
  <li>Saturn's largest moon, Titan, is of particular interest due to its Earth-like features. It boasts a nitrogen-rich atmosphere, which is thicker than Earth's, and it even has lakes and rivers of liquid methane and ethane on its surface, making it a unique celestial body for scientific study. Researchers are intrigued by the possibility of prebiotic chemistry occurring on Titan, and it remains a subject of fascination in the field of planetary science.
  </li>

<li>
  Enceladus, another of Saturn's moons, is renowned for its geysers of water vapor and ice that erupt from its south pole. These geysers suggest the existence of a subsurface ocean beneath its icy crust, making it a target for astrobiology research. The presence of water and the potential for habitability make Enceladus an intriguing destination for future missions.
  </li>

<li>
  In addition to Titan and Enceladus, Saturn's other moons, such as Tethys, Dione, Rhea, and Iapetus, each have their unique features and mysteries. These moons continue to captivate scientists and astronomers with their enigmatic properties, and they play a vital role in advancing our understanding of the outer reaches of our solar system.
  </li>

<li>
  The study of Saturn's moons not only enhances our knowledge of planetary science but also fuels our curiosity about the vast, diverse landscapes within our solar system. As we delve deeper into the exploration of these celestial bodies, we uncover new secrets and gain valuable insights into the complex processes that shape our universe.
  </li>
</ul>
</div>

        
      {/* Display the fetched images */}
      <h2 className="text-3xl text-center pt-4 pb-4">Image Gallery From NASA</h2>

      <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
        {images.map((item, index) => (
            <div>
            <img
              key={index}
              src={item.links[0].href}
              alt={`Saturn Image ${index}`}
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

export default Saturn;
