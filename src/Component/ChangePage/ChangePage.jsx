import './ChangePage.css'
import ArrowLeft from '../../assets/img/arrowLeft..svg'
import ArrowRight from '../../assets/img/arrowRight..svg'

const ChangePage = () => {
    return (
        <div className='change-container'>
            <img src={ArrowLeft}/>
            <div className="pageNumber">
                1
            </div>
            <div className="pageNumber">
                2
            </div>
            <img src={ArrowRight}/>
        </div>
        
    )
}

export default ChangePage;