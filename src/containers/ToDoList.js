import {useState} from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList'
import './styles/ToDoList.css';

export default function ToDoList (){
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    const handleChange = (event)=>{
        setTask(event.target.value)
    }

    const handleClick = (event) => {
        const nuevoArreglo = [...list, task]
        //otra opcion: 
        // const nuevoArreglo = list.slice()
        // nuevoArreglo.push(task)
        setList(nuevoArreglo)
        setTask('')
    }

    const handleDelete = (index) => {
        const nuevoArreglo = list.filter((element, currentIndex)=>{
            return index !== currentIndex
        })
        setList(nuevoArreglo)
    }

    return(
        <section id="to-do-list">
            <TaskInput onChange={handleChange} onClick={handleClick} task={task}/>
            <TaskList list={list} onClick={handleDelete}/>
        </section>
    )
}