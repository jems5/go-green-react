import { FaBullseye, FaEye, FaSlidersH } from "react-icons/fa";

function AboutUs() {
  const containerData = [
    {
      imgSource: "/src/assets/about-mission.jpg",
      logo: FaBullseye,
      title: "Our Mission",
      text: "Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc, ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis. Aenean tincidunt auctor purus, ac sodales sapien sagittis",
      buttonText: "Read More",
    },
    {
      imgSource: "/src/assets/about-vision.jpg",
      logo: FaEye,
      title: "Our Vision",
      text: "Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc, ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis. Aenean tincidunt auctor purus, ac sodales sapien sagittis",
      buttonText: "Read More",
    },
    {
      imgSource: "/src/assets/about-objective.jpg",
      logo: FaSlidersH,
      title: "Our Objective",
      text: "Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc, ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis. Aenean tincidunt auctor purus, ac sodales sapien sagittis",
      buttonText: "Read More",
    },
  ];

  return (
    <div className="about-us-container">
      <h1 className="primary-header-black">About Us</h1>
      <p className="secondary-text-grey">Maecenas vel turpis quis lorem aliquam tempus quis non mi. Pellentesque habitant</p>
      <p className="secondary-text-grey">morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <div className="about-us-header-container">
        <div className="about-us-left-container">
          <img src="/src/assets/about.jpg" alt="" width={550} height={300} />
        </div>
        <div className="about-us-right-container">
          <h1 className="secondary-header-green">Welcome to Our Site</h1>
          <p className="secondary-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum rutrum ligula. Integer ac porttitor mi. In finibus vehicula aliquet. Vestibulum et velit placerat, pretium lorem
            id, porttitor libero. Suspendisse scelerisque nec arcu a malesuada. Nulla tempus dictum tristique.
          </p>
          <button className="cta-size-4">Read More</button>
        </div>
      </div>
      <div className="about-us-content-container">
        {containerData.map((dataItem, index) => (
          <div className="about-us-individual-container" key={index}>
            <div className="individual-image-container">
              <img src={dataItem.imgSource} alt="" />
            </div>
            <div className="icon-wrapper">
              <dataItem.logo size={60} className="icons-about-us" />
            </div>
            <div className="individual-content-container">
              <h3>{dataItem.title}</h3>
              <p className="secondary-text-grey">{dataItem.text}</p>
              <button className="cta-size-4">{dataItem.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
