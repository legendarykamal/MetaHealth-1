import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBzl1ZmweiFDXewxbMlA264PWo1NrqbKyE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
));

class Demo extends Component {
    ReactGoogleMaps = () => [<MyMapComponent key="map" />];
    render() {
        return (
            <section
                className="portfolio_slider_area"
                id="demo"
                style={{
                    height: "100vh",
                    width: "auto",
                }}
            >
                <MyMapComponent
                    key="map"
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                />
            </section>
        );
    }
}

export default Demo;
