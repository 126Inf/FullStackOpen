const Message = (props) => {
    if(props.message === null) {
        return;
    }

    return (
        <div className="message"><p>{props.message}</p></div>
    )
}

export default Message;
