import './ReviewItem.css';
import {InfoReview} from '../CarList/data.js';

const ReviewItem = (props) => {
    return (
        <div className="reviewItem-container">
            <img src={props.imgReview}/>
            <div className="group-info">
            <div className="reviewItem-info">
                <p className="reviewItem-nameCar">{props.nameReview}</p>
                <p>{props.textReview}</p>
            </div>
            <div className="userReview">
                <img src={props.avarta}/>
                <p>{props.nameUser}</p>
                <p>{props.dateReview}</p>
            </div>
            </div>
        </div>
    )
}

export default ReviewItem;