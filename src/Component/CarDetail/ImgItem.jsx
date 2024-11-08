import './ImgItem.css'

const ImgItem = (props) => {
    return (
        <div className="img-item">
            <img src={props.imgItem}/>
        </div>
    )
}