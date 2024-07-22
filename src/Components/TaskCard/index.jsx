import './TaskCard.css'

function TaskCard (props) {
    return (
        <div className="task-card-container">
            <img 
                className="close-icon"
                src="/icon-close.svg" alt="close" />
            <p>{props.task}</p>
            <img
                className="check-icon" 
                src="/icon-check.svg" alt="check" />
        </div>
    )
}

export {TaskCard}