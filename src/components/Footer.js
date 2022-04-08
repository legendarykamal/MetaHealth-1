import React, { Component } from "react";
import { AiFillHeart } from "react-icons/ai";

class Footer extends Component {
    render() {
        const today = new Date();
        return (
            <footer className="new_footer_area bg_color">
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">
                                    © {today.getFullYear()} All rights reserved.{" "}
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p>
                                    Made with <AiFillHeart color={"#f00"} /> by
                                    MetaHealth
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
