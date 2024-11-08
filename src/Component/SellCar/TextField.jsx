import './Textfield.css'

const TextField = (props) => {
    return (
        <div className="textfield">
            <p>{props.title}</p>
            <div className="textField-body">
            <input type="text"/> <span>{props.unit}</span>
            </div>
        </div>
        
    )
}

export default TextField;