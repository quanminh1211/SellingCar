import './TitlePage.css'

const TitlePage = (props) => {
    return (
        <div className="titlePage-container">
            <div className="titleP">
            <h1>{props.titlePage}</h1>
            <p>Homepage - {props.titlePage}</p>
            </div>
        </div>
    )
}

export default TitlePage;