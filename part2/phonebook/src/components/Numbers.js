const Numbers = (props) => {
    return (
        <li>{props.person.name} {props.person.number} <button onClick={props.deletebutton}>Delete</button></li>
    )
}

export default Numbers;
