import { useEffect, useState } from "react";

function NavBar() {
  const [bgBlack, setBgBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroller = document.querySelector(".main-scroller-container");
      const scrollerHeight = scroller ? scroller.offsetHeight : 0;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (window.scrollY > scrollerHeight / 3) {
        setBgBlack(true);
      } else {
        setBgBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bar-container ${bgBlack ? "bg-black" : ""}`}>
      <div className="nav-logo">
        <h1>Go Green</h1>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Price</a>
          </li>
          <li>
            <a href="#">Dropdown</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
