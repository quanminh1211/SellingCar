import './ServiceItem.css'


const ServiceItem = (props) => {
    return (
        <div className="service-container">
            <div className="item">
            <img src={props.IconService} />
            <p>{props.nameService}</p>
            </div>
        </div>
    )
}

export default ServiceItem;