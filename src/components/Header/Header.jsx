import conceptsImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const title = reactDescriptions[getRandomNumber(2)];

  return (
    <header>
      <img src={conceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {title} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
