import { FaDesktop, FaLaptop, FaTablet, FaMobile } from "react-icons/fa";

function Services() {
  const servicesData = [
    {
      id: 1,
      logo: FaDesktop,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
    {
      id: 2,
      logo: FaLaptop,
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
    {
      id: 3,
      logo: FaTablet,
      title: "App Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
    {
      id: 4,
      logo: FaMobile,
      title: "App Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
    {
      id: 5,
      logo: FaDesktop,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
    {
      id: 6,
      logo: FaLaptop,
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
    {
      id: 7,
      logo: FaTablet,
      title: "App Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
    {
      id: 8,
      logo: FaMobile,
      title: "App Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium.",
    },
  ];

  return (
    <div className="services-main-container">
      <div className="services-heading-container">
        <h1 className="primary-header-black">Services</h1>
        <p className="secondary-text-grey">Integer sollicitudin sed nulla non consequat. Nullam vitae erat quis leo accumsan</p>
        <p className="secondary-text-grey">ullamcorper. Suspendisse leo purus, pellentesque posuere.</p>
      </div>
      <div className="services-wrapper">
        {servicesData.map((dataItem) => (
          <div className="services" key={dataItem.id}>
            <dataItem.logo size={50} className="icons" />
            <a href="#" className="secondary-header-black">
              {dataItem.title}
            </a>
            <p className="secondary-text-grey">{dataItem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
