import { useEffect, useState } from "react";

function Skills({ percentage, color, index }) {
  const barChartData = [
    { id: 1, percentage: 100, color: "#28a745", text: "HTML" },
    { id: 2, percentage: 90, color: "#17a2b8", text: "CSS" },
    { id: 3, percentage: 80, color: "#ffc107", text: "JQUERY" },
    { id: 4, percentage: 70, color: "#dc3545", text: "PHP" },
  ];

  const [fill, setFill] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(`bar-chart-${index}`);
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setFill(percentage);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [percentage, index]);

  return (
    <div className="skills-container">
      <div className="text-container-skills">
        <h1 className="primary-header-black">Our Skills</h1>
        <p className="secondary-text-grey">Quisque ac tincidunt ipsum egestas viverra mi, ac vehicula enim consectetur quis. In</p>
        <p className="secondary-text-grey">imperdiet varius elit, ut convallis lectus luctus quis.</p>
      </div>
      <div className="graph-container">
        {barChartData.map(() => (
          <div id={`bar-chart-${barChartData.id}`} className="bar-chart" key={barChartData.index}>
            <div className="bar-fill" style={{ width: `${barChartData.percentage}%`, backgroundColor: `${barChartData.color}` }}>
              <p>{barChartData.text}</p>
              <p>{barChartData.percentage}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-container">
        <div className="stats">
          <p className="primary-header-green">100</p>
          <p className="secondary-text-grey">Our Staffs</p>
        </div>
        <div className="stats">
          <p className="primary-header-green">200</p>
          <p className="secondary-text-grey">Our Clients</p>
        </div>
        <div className="stats">
          <p className="primary-header-green">300</p>
          <p className="secondary-text-grey">Completed Projects</p>
        </div>
        <div className="stats">
          <p className="primary-header-green">400</p>
          <p className="secondary-text-grey">Running Projects</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

{
  /*
        <div className="html">
          <p>HTML</p>
          <p>100%</p>
        </div>
        <div className="css">
          <p>CSS</p>
          <p>90%</p>
        </div>
        <div className="jquery">
          <p>JQUERY</p>
          <p>80%</p>
        </div>
        <div className="php">
          <p>PHP</p>
          <p>70%</p>
        </div>*/
}
