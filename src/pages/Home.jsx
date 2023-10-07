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