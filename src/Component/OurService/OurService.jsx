import './OurService.css'
import ServiceItem from './ServiceItem.jsx'
import IconService1 from '../../assets/img/IconService1..svg'
import IconService2 from '../../assets/img/IconService2..svg'
import IconService3 from '../../assets/img/IconService3..svg'


const OurService = () => {
    return (
        <div className='ourService-container'>
            <h2>Our Service</h2>
        <div className="service-list">
        <ServiceItem IconService={IconService1} nameService="Buy a new car"/>
        <ServiceItem IconService={IconService2} nameService="Buy an used car"/>
        <ServiceItem IconService={IconService3} nameService="Sell my car"/>
        </div>
        </div>
    )
}

export default OurService