import React, { Component } from "react";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";

class Navbar extends Component {
    render() {
        let { mainlogo, stickylogo } = this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <nav className="navbar navbar-expand-lg navbar-white menu_two">
                    <div className="container">
                        <a
                            href="/"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexDirection: "row",
                            }}
                        >
                            <span className="navbar-brand logo_h">
                                <img
                                    src={require("../image/" + mainlogo)}
                                    alt="Mh"
                                />
                                <img
                                    src={require("../image/" + stickylogo)}
                                    alt="Mh"
                                />
                            </span>
                            <h1
                                style={{
                                    color: "#0db3c7",
                                    fontWeight: "600",
                                    fontFamily: "sans-serif",
                                    margin: 10,
                                }}
                            >
                                MetaHealth
                            </h1>
                        </a>
                        <div
                            className="collapse navbar-collapse offset"
                            id="navbarSupportedContent"
                        >
                            <ul className="nav navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        activeClass="active"
                                        to="demo"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                        MetaHealth
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Sticky>
        );
    }
}

export default Navbar;
