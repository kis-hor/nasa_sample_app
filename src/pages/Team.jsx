import React from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";

const Team = () => {
    return (
        <>
        <Header />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl text-center text-gray-800 font-semibold mb-6">
            About Team Troubleshooters
          </h1>
          <div className="flex flex-wrap justify-center -m-4">
            {/* Team Image */}
            <div className="w-full">
              <img
                src="../../images/Team copy.jpeg"
                alt="Team Troubleshooters"
                style={{width: "2000px", height:"auto", objectFit: "contain", marginLeft: "auto", marginRight: "auto"}}
              />
            </div>
            {/* Team Description */}
            <div className="w-full mt-6 ">
              <p className="text-lg text-gray-700 mb-4">
                Team Troubleshooters is a group of six dedicated individuals
                passionate about making the wonders of the solar system accessible
                to everyone. Our mission is to provide a user-friendly website
                where users can easily explore detailed information about planets
                and the seven main stars.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With a blend of coding expertise and a shared love for
                space-related subjects, we embarked on this project during a
                hackathon. Our goal was to create a platform that not only
                educates but also inspires curiosity about the cosmos.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Through collaborative effort and innovative design, we have
                developed a unique website that offers a captivating journey
                through the solar system. We believe that understanding our
                celestial neighbors enriches our perspective of the universe we
                call home.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Thank you for visiting our website and joining us on this
                celestial adventure. Feel free to explore the wonders of the
                solar system with us.
              </p>
              {/* Team Members */}
            <div className="text-xl text-gray-900 font-semibold flex justify-center">
              Meet Our Team Members:
            </div>
            <ul className="list-disc pl-6 flex flex-col items-center ">
              <li className="text-lg text-blue-500 font-medium"><a href='https://www.instagram.com/babel_010/?hl=en'>Immanuel Balyakoti</a></li>
              <li className="text-lg text-green-500 font-medium"><a href='https://www.instagram.com/21_aayusha/?hl=en'>Aayusha Singh</a></li>
              <li className="text-lg text-pink-500 font-medium"><a href='https://www.instagram.com/azamhusain1/?hl=en'>Azam Hussain</a></li>
              <li className="text-lg text-indigo-500 font-medium"><a href='https://www.instagram.com/kis_hor16/?hl=en'>Kishor Bahadur GC</a></li>
              <li className="text-lg text-purple-500 font-medium"><a href='https://www.instagram.com/nimesh.do_n/?hl=en'>Nimesh Dangi</a></li>
              <li className="text-lg text-red-500 font-medium"><a href='https://www.instagram.com/bipul0_0/?hl=en'>Bipul Shrestha</a></li>
            </ul>

            </div>
          </div>
        </div>
      </div>
      < Footer/>
      </>
    );
  };
  
  export default Team;