import { BsLinkedin } from "react-icons/bs";
import "./FooterMain.css";
import { TbNoCopyright } from "react-icons/tb";
import { BiSmile } from "react-icons/bi";

export default function FooterMain() {
  return (
    <div className="FooterMain">
      <h1>
        <a
          href="https://www.linkedin.com/in/akliyachir"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akli Yachir
          <p className="linkedinCentre">
            <BsLinkedin />
          </p>
        </a>
      </h1>
      <div className="separationHorizontale"></div>
      <p>Ceci est une reconstruction partielle du site</p>
      <a
        href="https://buenosairesconnect.com/fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buenos Aires Connect
      </a>
      <h1>
        <BiSmile />
      </h1>
    </div>
  );
}
