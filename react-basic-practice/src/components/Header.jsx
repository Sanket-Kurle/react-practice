import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";

export function Header() {
  const disription = reactDiscription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {disription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
const reactDiscription = ["Fundamental", "Core", "Crucial"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
