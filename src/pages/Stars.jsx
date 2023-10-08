import Betelgeuse from "../components/Betelgeuse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rigel from "../components/Rigel";
import Sirius from "../components/Sirius";
import Lacerta from "../components/Lacerta";
import Arcturus from "../components/Arcturus";
import Procyon from "../components/Procyon";
import Sun from "../components/Sun";

const Stars = () => {
    return (
        <>
            <Header />
            {/* Components for Star Here */}
            <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
                <Betelgeuse />
                <Rigel/>
                <Sirius/>
                <Arcturus/>

                <Lacerta />
                <Sun/>
                <Procyon/>
            </div>
            <Footer />
        </>
    )
}

export default Stars;