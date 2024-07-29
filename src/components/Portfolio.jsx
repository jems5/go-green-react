import { useState } from "react";
import { FaArrowUpRightFromSquare, FaEye } from "react-icons/fa6";

function Portfolio() {
  const skill = [
    { id: "1", title: "Lorem ipsum dolor", text: "WEB DESIGN", imgSource: "src/assets/portfolio-1.jpg" },
    { id: "2", title: "Nulla ullamcorper pharetra", text: "WEB DEVELOPMENT", imgSource: "src/assets/portfolio-2.jpg" },
    { id: "3", title: "Phasellus eget dictum", text: "APP DESIGN", imgSource: "src/assets/portfolio-3.jpg" },
    { id: "4", title: "Donec mattis vestibulum", text: "APP DEVELOPMENT", imgSource: "src/assets/portfolio-4.jpg" },
    { id: "5", title: "Pellentesque ullamcorper", text: "WEB DESIGN", imgSource: "src/assets/portfolio-5.jpg" },
    { id: "6", title: "Sed pretium sapien", text: "WEB DEVELOPMENT", imgSource: "src/assets/portfolio-6.jpg" },
  ];

  const filterData = [{ title: "ALL" }, { title: "WEB DESIGN" }, { title: "WEB DEVELOPMENT" }, { title: "APP DESIGN" }, { title: "APP DEVELOPMENT" }];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [click, setClick] = useState(null);
  const [containerId, setContainerId] = useState(null);

  const filterButton = (title) => {
    if (title === "ALL") {
      return skill;
    }
    return skill.filter((skillData) => skillData.text === title);
  };

  const [filteredSkill, setFilteredSkill] = useState(skill);

  function filter(title, index) {
    setClick(index);
    setFilteredSkill(filterButton(title));
    console.log(title, index);
    console.log(filteredSkill);
  }

  return (
    <div className="portfolio-container">
      <h1 className="primary-header-black">our portfolio</h1>
      <p className="secondary-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper pharetra</p>
      <p className="secondary-text-grey">ligula nec hendrerit. Ut eu libero nec magna placerat fringilla.</p>
      <div className="portfolio-filter-container">
        {filterData.map((data, id) => (
          <button
            key={id}
            className="cta-size-5"
            onClick={() => filter(data.title, id)}
            onMouseEnter={() => setHoverIndex(id)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{ background: hoverIndex === id || click === id ? "#1dbf73" : "#353535" }}>
            {data.title}
          </button>
        ))}
      </div>
      <div className="portfolio-container-wrapper">
        {skill.map((skillData, index) => (
          <div
            className="portfolio-individual-container"
            key={index}
            style={{ display: filteredSkill.some((item) => item.text === skillData.text) ? "flex" : "none" }}
            onMouseEnter={() => setContainerId(index)}
            onMouseLeave={() => setContainerId(null)}>
            <img src={skillData.imgSource} alt="" />
            <div className="portfolio-icon-container" style={{ display: containerId === index ? "flex" : "none" }}>
              <FaEye className="portfolio-icons" />
              <FaArrowUpRightFromSquare className="portfolio-icons" />
            </div>
            <p className="secondary-text-white" style={{ display: containerId === index ? "none" : "block" }}>
              {skillData.title}
            </p>
            <p className="desc-text-white" style={{ display: containerId === index ? "none" : "block" }}>
              {skillData.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
