import './CarDetail.css'

const CarDetail = (props) => {
    return (
        <div className="carDetail-container">
            <div className="carDetail-name">{props.name}</div>
            <div className="carDetail-img">
                <img src={props.imgCar}/>
                <div className="listImgCar">
                    <img src={props.imgCar1}/>
                    <img src={props.imgCar2}/>
                    <img src={props.imgCar3}/>
                </div>
            </div>
        </div>
    )
}

export default CarDetail;