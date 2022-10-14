import { useState } from "react";
import "./Card.css";

const Card = ({ name, img, options }) => {
  const [show, setShow] = useState(true);

  // const eventHandler = (e) => {
  //   console.log(e);
  // };
  const eventHandlerShow = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div className="container" onClick={eventHandlerShow}>
      {show ? (
        <div className="card">
          <img src={img} alt="img" />
          <h3>{name}</h3>
        </div>
      ) : (
        <div className="back-container">
          {options.map((item, i) => {
            return (
              <ul key={i}>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
