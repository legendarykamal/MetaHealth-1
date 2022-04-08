import React from "react";
import {
    BannerHeader,
    BannerAbout,
    Demo,
    Footer,
} from "./../components";

function Home() {
    return (
        <div className="body_wrapper">
            <BannerHeader />
            <BannerAbout />
            <Demo />
            <Footer />
        </div>
    );
}

export default Home;
