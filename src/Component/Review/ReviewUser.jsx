import './ReviewUser.css'
import ReviewItem from './ReviewItem.jsx';
import {InfoReview} from '../CarList/data.js';


const ReviewUser = () => {
    return (
        <div className='review-container'>
        <div className="title-review">
            <p>News</p>
            <p>Reviews</p>
        </div>
<div className='list_review'>
    {InfoReview.map((ItemReview) => {
        return <ReviewItem key={ItemReview.id} avatar={ItemReview.avatar} nameUser={ItemReview.nameUser} nameReview={ItemReview.nameReview}
        imgReview={ItemReview.imgReview}  dateReview={ItemReview.dateReview} textReview={ItemReview.textReview}/>
    })}
</div>
        </div>
    )
}

export default ReviewUser;