import Header from "../components/Header";
import Earth from '../components/Earth';
import Venus from '../components/Venus';
import Mercury from '../components/Mercury';
import Jupiter from '../components/Jupiter';
import Saturn from '../components/Saturn';
import Neptune from '../components/Neptune';
import Mars from '../components/Mars';
import Uranus from '../components/Uranus';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <div className="bg-cover bg-center h-screen">
                <h1 className="text-white absolute ml-40 mt-[200px] text-7xl font-semibold">
                    Are you lost?
                 </h1>
                 <h3 className="absolute ml-40 text-xl text-white mt-80 font-thin text-justify">
                 Oops, you were thrown out of the solar system, drifting <br></br> amidst the boundless mysteries of deep space, 
                 <br></br>where every star holds an untold story. <br></br>Will you like to experience the solar system with us?
                 </h3>
                <p className="text-white absolute text-opacity-5 text-[400px] ml-[870px]">404</p>
                 <a href="#" className="text-black bg-white hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 absolute ml-40 mt-[450px]">Explore...</a>
                <img className="bg-cover bg-center h-screen w-screen" src="https://w0.peakpx.com/wallpaper/346/240/HD-wallpaper-astronaut-swing-bouquet-space-art-tablet-laptop-background.jpg" alt="Background"></img>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
                
                {/* Mercury  Planet*/}
                <Mercury />
                {/* Mercury  Planet*/}

                {/* Venus  Planet*/}
                <Venus />
                {/* Venus  Planet*/}

                {/* Earth  Planet*/}
                <Earth />
                {/* Earth  Planet*/}

                {/* Mars  Planet*/}
                <Mars />
                {/* Mars  Planet*/}

                {/* Jupiter  Planet*/}
                <Jupiter />
                {/* Jupiter  Planet*/}

                {/* Saturn  Planet*/}
                <Saturn />
                {/* Saturn  Planet*/}

                {/* Neptune  Planet*/}
                <Neptune />
                {/* Neptune  Planet*/}


                {/* Uranus  Planet*/}
                <Uranus />
                {/* Uranus  Planet*/}

            </div>

            <Footer />
        </>
    )
}

export default Home;