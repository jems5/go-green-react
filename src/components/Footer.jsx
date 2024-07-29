import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="main-wrap">
      <div className="footer-grid-container">
        <div className="container-1">
          <h2 className="primary-header-white">Go Green</h2>
          <p className="desc-text-white">Lorem ipsum dolor sit amet,</p>
          <p className="desc-text-white">consectetur adipiscing elit. Etiam a</p>
          <p className="desc-text-white">tortor commodo, sollicitudin velit</p>
          <p className="desc-text-white">nec, lobortis erat. Sed rutrum metus</p>
          <p className="desc-text-white">ac augue scelerisque, vel commodo</p>
          <p className="desc-text-white">erat commodo. Mauris quis mattis</p>
          <p className="desc-text-white">sem. Maecenas dictum nunc.</p>
        </div>
        <div className="container-2">
          <h3 className="desc-header-white">About Us</h3>
          <ul>
            <li className="desc-text-white">Home</li>
            <li className="desc-text-white">About Us</li>
            <li className="desc-text-white">Our services</li>
            <li className="desc-text-white">Terms & condition</li>
            <li className="desc-text-white">Privacy policy</li>
          </ul>
        </div>
        <div className="container-3">
          <h3 className="desc-header-white">Contact Us</h3>
          <p className="desc-text-white">Your Location</p>
          <p className="desc-text-white">Your City</p>
          <p className="desc-text-white">Your Country</p>
          <p className="desc-text-white">Phone: +123-456-7890</p>
          <p className="desc-text-white">Email: info@example.com</p>
          <div className="icon-container">
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div className="container-4">
          <h3 className="desc-header-white">Subscription</h3>
          <p className="secondary-text-white">Lorem Ipsum is simply dummy text</p>
          <p className="secondary-text-white">of the printing and typesetting</p>
          <p className="secondary-text-white">industry. Lorem Ipsum has been the</p>
          <p className="secondary-text-white">industry's standard dummy text ever</p>
          <p className="secondary-text-white">since the 1500s, when an unknown</p>
          <p className="secondary-text-white">printer took a galley of type.</p>
          <div className="input-container">
            <input type="text" />
            <button className="cta-size-3-black">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-black">
        <p className="secondary-text-grey">
          &copy;Copywright <a href="#">Go Green</a> All Rights Reserved
        </p>
        <p className="secondary-text-grey">
          Template by <a href="#">@JemmyChanChiuMi</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
