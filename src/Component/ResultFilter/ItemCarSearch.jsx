import "./ItemCarSearch.css";

const ItemCarSearch = (props) => {
  return (
    <div className="item-container">
      <img src={props.imgItem} />
      <div className="group-info">
        <p className="nameCar">{props.nameItem}</p>
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
          <div className="iconGroup">
            <img src={props.petrolIcon} />
            <span>{props.petrol}</span>
          </div>
          <div className="iconGroup">
            <img src={props.peopleIcon} />
            <span>{props.people}</span>
          </div>
        </div>
        <div className="vote">
          <img src={props.Star} />
          <p>120 votes</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCarSearch;
