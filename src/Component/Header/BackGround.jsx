import './BackGround.css'

const BackGround = (props) => {
    return (
        <div className="background">
            <img src={props.imgBg}alt="Background"/>
        </div>
    )
}

export default BackGround;