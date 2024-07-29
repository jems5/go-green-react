import { useEffect, useState, useRef } from "react";

function Skills() {
  const barChartData = [
    { id: 1, text: "HTML", percentage: "100%", color: "#28a745" },
    { id: 2, text: "CSS", percentage: "90%", color: "#17a2b8" },
    { id: 3, text: "JQUERY", percentage: "80%", color: "#ffc107" },
    { id: 4, text: "PHP", percentage: "70%", color: "#dc3545" },
  ];

  const statsData = [
    { number: "100", text: "Our Staffs" },
    { number: "200", text: "Our Clients" },
    { number: "300", text: "Completed Projects" },
    { number: "400", text: "Running Projects" },
  ];

  const [fill, setFill] = useState(Array(barChartData.length).fill("0%"));
  const skillsRef = useRef(null);

  const BarChart = ({ text, percentage, backgroundColor, width }) => {
    return (
      <div className="empty-bar">
        <div className="filled-bar" style={{ backgroundColor, width }}>
          <p className="desc-text-white">{text}</p>
          <p className="desc-text-white">{percentage}</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const incrementFill = () => {
      const duration = 2000; // 2 seconds
      const intervalTime = 50; // Time between each increment in ms

      const interval = setInterval(() => {
        setFill((prevFill) => {
          const newFill = prevFill.map((fillValue, index) => {
            const currentPercentage = parseFloat(fillValue);
            const targetPercentage = parseFloat(barChartData[index].percentage);
            const remainingPercentage = targetPercentage - currentPercentage;

            // Adjust step size based on remaining percentage to slow down towards the end
            const step = Math.max(remainingPercentage * 0.1, 0.2); // Adjust the factor for different easing

            if (currentPercentage < targetPercentage) {
              return `${Math.min(currentPercentage + step, targetPercentage)}%`;
            }
            return fillValue;
          });

          // Clear the interval when all bars are filled
          if (newFill.every((fillValue, index) => parseFloat(fillValue) >= parseFloat(barChartData[index].percentage))) {
            clearInterval(interval);
          }

          return newFill;
        });
      }, intervalTime);
    };

    const handleScroll = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          incrementFill();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [barChartData]);

  return (
    <div className="skills-container" ref={skillsRef}>
      <h1 className="primary-header-black">Our Skills</h1>
      <p className="secondary-text-grey">Quisque ac tincidunt ipsum egestas viverra mi, ac vehicula enim consectetur quis. In</p>
      <p className="secondary-text-grey">imperdiet varius elit, ut convallis lectus luctus quis.</p>
      <div className="bar-chart-container">
        {barChartData.map((data, index) => (
          <BarChart key={index} text={data.text} percentage={data.percentage} width={fill[index]} backgroundColor={data.color} />
        ))}
      </div>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index}>
            <p className="primary-header-green">{stat.number}</p>
            <p className="secondary-text-grey">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
