import Card from "./Card";
import "./Card.css";
import { languages } from "../../helper/data";

const Main = () => {
  return (
    <div className="card-container">
      {languages.map((item, i) => (
        <Card key={i} name={item.name} img={item.img} options={item.options} />
      ))}
    </div>
  );
};

export default Main;
