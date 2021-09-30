import {useState, useEffect} from "react"
import Button from '../components/Button'
import CounterNumber from '../components/CounterNumber'
import Message from '../components/Message'
import './styles/Counter.css';

export default function Counter(){
    let [number, setNumber] = useState(0)


    useEffect(()=>{
        console.log(`Me renderice y el numero vale ${number}`)
        return () => {
            console.log(`Me fui y numero vale ${number}`)
        }
    },[number])

    const handleAdd = ()=>{
        setNumber(number+1)
    }

    const handleSub = ()=>{
        setNumber(number-1)
    }

    return(
        <section id="counter">
            <Button symbol="-" disabled={number <= 0} onClick={handleSub}/>
            <CounterNumber number={number}/>
            <Button disabled={number >= 30} symbol="+" onClick={handleAdd}/>
            {
                number <= 0? <Message operation="restar"/> : null
            }
            {
                number >= 30? <Message operation="sumar"/> : null
            } 
        </section>
    )
}

