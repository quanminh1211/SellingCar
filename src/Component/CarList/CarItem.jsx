import "./CarItem.css";

const CarItem = (props) => {
  return (
    <div className="car-item">
      <img className="imgCar" src={props.imgItem} />
      <div className="infoItem">
        <button>{props.status}</button>
        <p>{props.nameItem}</p>
        <p>{props.price}</p>
        <p>{props.location}</p>
        <div className="parameter">
          <div className="iconGroup">
          <img src={props.yearIcon} />
          <span>{props.year}</span>
          </div>
          <div className="iconGroup">
          <img src={props.wheelDriveIcon} />
          <span>{props.wheelDrive}</span>
          </div>
        </div>
        <div className="parameter">
          <div className="iconGroup">
          <img src={props.petrolIcon} />
          <span>{props.petrol}</span>
          </div>
          <div className="iconGroup">
          <img src={props.peopleIcon} />
          <span>{props.people}</span>
          </div>
        </div>
      </div>
      <div className="line">
      </div>
      <div className="vote">
      <img src={props.Star}/>
      <p>120 votes</p>
      </div>
    </div>
  );
};

export default CarItem;
