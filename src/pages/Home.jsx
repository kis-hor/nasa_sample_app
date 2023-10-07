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