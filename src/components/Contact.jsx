import { FaLocationPin } from "react-icons/fa6";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import dotenv from "dotenv";
("Use client");
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

function Contact() {
  const dataSet = [
    { header: "ADDRESS", icon: FaLocationPin, desc: "Your Location, City, Country" },
    { header: "PHONE NUMBER", icon: FaPhone, desc: "+123-456-789" },
    { header: "EMAIL", icon: FaEnvelope, desc: "jemmychan@gmail.com" },
  ];

  const containerStyle = {
    width: "100%",
    height: "320px",
  };

  const center = {
    lat: 3.1991,
    lng: 101.5779,
  };

  return (
    <div className="contact-us">
      <h1 className="primary-header-black">Contact Us</h1>
      <p className="secondary-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper pharetra</p>
      <p className="secondary-text-grey">ligula nec hendrerit. Ut eu libero nec magna placerat fringilla.</p>
      <div className="contact-information-container">
        {dataSet.map((data, index) => (
          <div className="individual-information-container" key={index}>
            <data.icon className="contact-us-icon" />
            <p className="secondary-text-black">{data.header}</p>
            <a href="#" className="desc-text-grey">
              {data.desc}
            </a>
          </div>
        ))}
      </div>
      <div className="contact-us-bottom-container">
        <div className="map-container">
          <LoadScript googleMapsApiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
          {/* <p>fix google maps api</p> */}
        </div>
        <div className="form-container">
          <div className="top-form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
          </div>
          <input className="subject-input" type="text" placeholder="Subject" />
          <textarea name="text" cols="30" rows="10"></textarea>
          <div className="contact-us-button-container">
            <button className="cta-size-3">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
