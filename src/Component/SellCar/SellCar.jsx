import "./SellCar.css";
import TitlePage from "../TitlePage/TitlePage.jsx";
import Dropdown from "./DropDown.jsx";
import TextField from "./TextField.jsx";
import FeatureSelector from "../FeatureSelector/FeatureSelector.jsx";
import { useRef } from "react";

const SellCar = () => {

  


  const inputRef = useRef(null);
  const handleInputFocus = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className="sellCar-container">
      <TitlePage titlePage="Sell Your Car" />
      <div className="Detail">
        <h1>Car Detail</h1>
        <div className="infoCarSearch">
          <div className="titleCar">
            <p>Title</p>
            <input type="text" placeholder="Enter your title" />
          </div>
          <div className="condition">
            <p>Condition</p>
            <input type="radio" name="choose" id="" /> <span>New</span>
            <input type="radio" name="choose" id="" /> <span>Used</span>
          </div>
        </div>
        <div className="typeChoose">
          <Dropdown dataIndex="BodyTypeCar" label="Body Type:" />
          <Dropdown dataIndex="Brand" label="Brand:" />
          <Dropdown dataIndex="ModelType"  label="Modal:" />
          <Dropdown dataIndex="year"  label="Year:" />
          <div className="PassengerCapacity">
            <p>Passenger Capacity:</p>
            <div className="PassengerCapacity-body">
              <button>-</button>
              <div className="inputs">1</div>
              <button>+</button>
            </div>
          </div>
          <Dropdown dataIndex="color" label="Exterior Color:" />
        </div>
        <div className="desc">
          <p>Description:</p>
          <textarea
            name=""
            id=""
            placeholder="Write description about your car"
          ></textarea>
        </div>
      </div>
      <div className="Detail">
        <h1>Engine Details</h1>
        <div className="typeChoose">
          <Dropdown  dataIndex="FuelType"  label="Fuel Type:" />
          <Dropdown  dataIndex="Transmission" label="Transmission:" />
          <Dropdown  dataIndex="Drivetrain" label="Drivetrain:" />
          <TextField title="Mileage" unit="Km" />
          <TextField title="Engine Capacity" unit="cc" />
          <TextField title="Power" unit="hp" />
        </div>
      </div>
      <div className="Detail">
        <h1>Dimension</h1>
        <div className="typeChoose">
          <TextField title="Length" unit="mm" />
          <TextField title="Width" unit="mm" />
          <TextField title="Height" unit="mm" />
          <TextField title="Cargo Volume" unit="L" />
        </div>
      </div>
      <FeatureSelector />
      <div className="Detail">
        <h1>Location</h1>
        <div className="andressText">
          <p>Address:</p>
          <input type="text" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29797.67416935781!2d105.7947648!3d21.004288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acabcbd609c7%3A0x6b1fec17e2d8f44b!2zQuG6o28gdMOgbmcgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1730710046637!5m2!1svi!2s"
            width="1144"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="Detail">
        <h1>Price</h1>
        <div className="price">
          <h3>Full price:</h3>
          <div className="priceText">
            <p>$</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="Detail">
        <h1>Images & Video</h1>
        <div className="fieldChooseFile">
          <p>Upload your Image / Video</p>
          <input ref={inputRef} type="file" style={{ display: "none" }} />
          <button onClick={handleInputFocus}>+</button>
        </div>
        <div className="linkForVid">
          <p>Link for Video:</p>
          <input type="text" />
        </div>
      </div>
      <div className="Detail">
        <h1>Vehicle History</h1>
        <div className="chooseVid">
            <input type="file"/>
        </div>
      </div>
      <button className="Sell">Sell My Car</button>
    </div>
  );
};

export default SellCar;
