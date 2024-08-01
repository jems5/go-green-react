import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";

function MainScroller() {
  const header = [
    {
      id: 1,
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum rutrum ligula. Integer ac porttitor mi. In finibus vehicula aliquet. Vestibulum et velit placerat.",
      imgSource: slider1,
    },
    {
      id: 2,
      title: "App Development",
      text: "Maecenas vel turpis quis lorem aliquam tempus quis non mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imgSource: slider2,
    },
    {
      id: 3,
      title: "Game Development",
      text: "Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc, ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis. Aenean tincidunt auctor purus.",
      imgSource: slider3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % header.length);
  }

  function previousSlide() {
    setCurrentSlide((prev) => (prev - 1 + header.length) % header.length);
  }

  return (
    <div className="main-scroller-container" style={{ backgroundImage: `url(${header[currentSlide].imgSource})` }}>
      <div className="background-overlay"></div>
      <div className="main-scroller-wrapper">
        <h1 className="primary-header-huge-white">{header[currentSlide].title}</h1>
        <p className="secondary-text-white">{header[currentSlide].text}</p>
      </div>
      <FaArrowLeft className="arrow-left-icon" onClick={previousSlide} />
      <FaArrowRight className="arrow-right-icon" onClick={nextSlide} />
      <button className="cta-header">Get Started</button>
    </div>
  );
}

export default MainScroller;
