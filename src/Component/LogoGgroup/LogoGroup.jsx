import './LogoGroup.css'
import Logo1 from '../../assets/img/audi..svg'
import Logo2 from '../../assets/img/fiat..svg'
import Logo3 from '../../assets/img/huyndai..svg'
import Logo4 from '../../assets/img/peugeout..svg'
import Logo5 from '../../assets/img/Tesla.svg'
import Logo6 from '../../assets/img/volvo1..svg'


const LogoGroup = () => {
    return (
        <div className="logo-container">
            <img src={Logo1} alt="Logo 1"/>
            <img src={Logo2} alt="Logo 2"/>
            <img src={Logo3} alt="Logo 3"/>
            <img src={Logo4} alt="Logo 4"/>
            <img src={Logo5} alt="Logo 5"/>
            <img src={Logo6} alt="Logo 6"/>
        </div>
    )
}

export default LogoGroup;