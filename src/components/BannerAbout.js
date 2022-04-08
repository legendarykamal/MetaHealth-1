import React, { Component } from "react";
import { Reveal } from "react-reveal/";
import { Link } from "react-scroll";
import { FaBroadcastTower } from "react-icons/fa";

class bannerAbout extends Component {
    render() {
        return (
            <section className="frelencer_banner_area" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="skill_content_two">
                                <Reveal effect="fadeInUp" duration={700}>
                                    <div className="skill_content_two">
                                        <div className={`section_title_two`}>
                                            <h6>
                                                {
                                                    "Let us worry about your Security"
                                                }
                                            </h6>
                                            <h2>
                                                {"THINK ➤ HEALTH >> WEALTH"}
                                            </h2>
                                        </div>
                                        <p>
                                            <span
                                                style={{
                                                    color: "#0db3c7",
                                                    fontWeight: "900",
                                                }}
                                            >
                                                Metahealth
                                            </span>{" "}
                                            - is a blockchain powered
                                            decentralized platform, that stores
                                            the data of mobile towers on
                                            Filecoin network and by connecting
                                            to web3 platform enables user to get
                                            the info if he is in the radiation
                                            region, thereby saving lifes.
                                        </p>
                                    </div>
                                </Reveal>
                            </div>
                            <div className="frelencer_content">
                                <Reveal effect="fadeInUp" duration={900}>
                                    <Link
                                        className="fadeInUp theme_btn active"
                                        to="demo"
                                        spy={true}
                                        smooth={true}
                                        offset={-86}
                                        duration={500}
                                    >
                                        Use Metahealth
                                    </Link>
                                </Reveal>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <img
                                style={{width: "30vmax"}}
                                src={require("../image/citytower.png")} />
                            </div>
                            {/* <FaBroadcastTower color="red" size={500} /> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default bannerAbout;
