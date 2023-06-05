import "./FooterMain.css";
import { TbNoCopyright } from "react-icons/tb";

export default function FooterMain() {
  return (
    <div className="FooterMain">
      <div className="separationHorizontale"></div>
      <p>Ceci est une reconstruction parcielle du site </p>
      <a
        href="https://buenosairesconnect.com/fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buenos Aires Connect
      </a>
      <h4>
        <TbNoCopyright />
      </h4>
    </div>
  );
}
