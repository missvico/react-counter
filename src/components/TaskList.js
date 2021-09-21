export default function TaskList(props){
    console.log(props.list)
    return(
        <div className="container-task-list">
           <ul>
            {
                props.list.map((task, index)=>{
                    return(
                        <li key={index}><span>{task}</span><button onClick={()=>props.onClick(index)} className="button-input">Eliminar</button></li>
                    )
                })
            }
           </ul>
        </div>
    )
}

