function CardDisplay(props){
    return(
        <div className="CardDisplay">
            <img src={props.image} alt="Item" />
            <div className="writeUp">
                <p>{props.writeUp}</p>
            </div>
        </div>
    )
}
export default CardDisplay;