import React from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";

const Team = () => {
    return (
        <>
        <Header />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col items-center ">
          <h1 className="text-4xl text-center text-gray-800 font-semibold mb-8 mt-8 italic">
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
              <p className="text-lg text-gray-700 mb-4 italic">
                Team Troubleshooters is a group of six dedicated individuals
                passionate about making the wonders of the solar system accessible
                to everyone. Our mission is to provide a user-friendly website
                where users can easily explore detailed information about planets
                and the seven main stars.
              </p>
              <p className="text-lg text-gray-700 mb-4 italic">
                With a blend of coding expertise and a shared love for
                space-related subjects, we embarked on this project during a
                hackathon. Our goal was to create a platform that not only
                educates but also inspires curiosity about the cosmos.
              </p>
              <p className="text-lg text-gray-700 mb-4 italic">
                Through collaborative effort and innovative design, we have
                developed a unique website that offers a captivating journey
                through the solar system. We believe that understanding our
                celestial neighbors enriches our perspective of the universe we
                call home.
              </p>
              <p className="text-lg text-gray-700 mb-4 italic">
                Thank you for visiting our website and joining us on this
                celestial adventure. Feel free to explore the wonders of the
                solar system with us.
              </p>
              {/* Team Members */}
            <div className="text-xl text-gray-900 font-semibold flex justify-center">
              <h1 className='text-4xl mt-4 mb-4'>Meet Our Team Members:</h1>
            </div>




            

          <div className="grid grid-cols-3 gap-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="../../../public/images/a3ec977a-528f-4c79-90f0-5967336132c9.jpeg" alt="Immanuel Dai"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center"><a href='https://www.instagram.com/babel_010/?hl=en'>Immanuel Balyakoti</a></div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="../../../public/images/IMG_3649.jpeg" alt="Aaayusha Singh"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center"><a href='https://www.instagram.com/21_aayusha/?hl=en'>Aayusha Singh</a></div>
                </div>
            </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="../../../public/images/IMG_3568.jpeg" alt="Azam"></img>
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center"><a href='https://www.instagram.com/azamhusain1/?hl=en'>Azam Husain</a></div>
            </div>
          </div>
          </div>


          <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="../../../public/images/EE14D557-2B38-4158-BA59-8F7515DD7907.jpeg" alt="Bipul Shrestha"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center"><a href='https://www.instagram.com/bipul0_0/?hl=en'>Bipul Shrestha</a></div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="h-[450px] w-auto mx-auto" src="../../../public/images/IMG_5520.jpg" alt="Kishor Bahadur G.C"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center"><a href='https://www.instagram.com/kis_hor16/?hl=en'>Kishor Bahadur G.C</a></div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src="../../../public/images/IMG_2936.jpeg" alt="Nimesh Dangi"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center"><a href='https://www.instagram.com/nimesh.do_n/?hl=en'>Nimesh Dangi</a></div>
                </div>
            </div>
          </div>


            </div>
          </div>
        </div>
      </div>
      < Footer/>
      </>
    );
  };
  
  export default Team;