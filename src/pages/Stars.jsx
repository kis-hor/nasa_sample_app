import Betelgeuse from "../components/Betelgeuse";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Stars = () => {
    return (
        <>
            <Header />
            {/* Components for Star Here */}
            <div className="grid grid-cols-3 gap-4 lg:p-12 p-6 bg-black">
                <Betelgeuse />
            </div>
            <Footer />
        </>
    )
}

export default Stars;