export default function TaskInput(props){
    return(
        <div className="container-task-input">
            <input onChange={props.onChange} className="input-task" value={props.task} />
            <button onClick={props.onClick} className="button-input">Agregar</button>
        </div>
    )
}