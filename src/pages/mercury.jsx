import Footer from "../components/Footer";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Mercury = () => {
    return (
        <>
        <Header/>
        <header>
            <h1 className="bg-green-200 text-black"><marquee behavior="scroll" direction="left"><bold>The planet where it's so hot you'll melt, and so cold you'll freeze-The ultimate weather rollercoaster of the solar system.</bold></marquee></h1>
        </header>
        <div className="container text-center w-[100vw] mx-auto ">
            <h2 className="py-5 text-2xl text-red-300"><strong>About mercury</strong></h2>
            <p className="cursive text-lg">Mercury is the smallest planet in our solar system and the closest to the Sun. It is named after the Roman messenger god due to its fast orbit around the Sun. Mercury has a surface temperature that can range from extremely hot to extremely cold due to its lack of a significant atmosphere to retain heat.Mercury, like other planets in our solar system, formed from a cloud of gas and dust in the early solar system. It is primarily composed of rock and metal and is believed to have a dense, iron-rich core.</p>
            <div className="flex gap-10 py-5">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="flex justify-center">
                    <img className="" src="https://photojournal.jpl.nasa.gov/jpegMod/PIA19420_modest.jpg" alt="Picture of mercury" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <img className="" src="https://photojournal.jpl.nasa.gov/jpegMod/PIA19285_modest.jpg" alt="picture of mercury" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                    <img className="" src="https://photojournal.jpl.nasa.gov/jpegMod/PIA19285_modest.jpg" alt="picture of mercury" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
            <img className="mx-auto" src="https://media3.giphy.com/media/cQm640G167pP8kuhcA/200w.webp?cid=dda24d50v5v7we4q23f4zjhewrthm10ou9vx29vvoq1fb63a&ep=v1_gifs_gifId&rid=200w.webp&ct=g" alt="rotation of mercury"/>
                </SwiperSlide>
            </Swiper>
            {/* <img className="w-1/4 h-auto object-contain" src="../../../../public/images/Mercury.gif" /> */}
            </div>
            <br />
            <h4 className="bg-blue-400 text-white py-3 text-lg monospace">Other Appealing facts</h4>
            <ul className="border-4 py-5 mb-5 bg-green-50 px-10">
                <li>Mercury has a day longer than its year. It rotates very slowly on its axis, taking 59 Earth days to complete one rotation.</li>
                <li>Despite being the closest planet to the Sun, it is not the hottest planet. Venus, with its thick atmosphere, holds that title.</li>
                <li>Mercury has a very thin exosphere, which means it essentially has no atmosphere to speak of.</li>
                <li>It has extreme temperature variations, with daytime temperatures reaching up to 800°F (427°C) and nighttime temperatures dropping to -279°F (-173°C).</li>
            </ul>
            <h5>Latest Imagery</h5>
        </div>
        <Footer />
        </>
    )
}

export default Mercury;