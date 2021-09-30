import {useState, useEffect} from 'react';
import CounterNumber from '../components/CounterNumber'
import Button from '../components/Button';

export default ()=>{
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false); 

    useEffect(()=>{
        let interval = null;
        if(active){
            interval  = setInterval(()=>{
                setTime(time=>time+1)
              },1000) 
        }else if(!active){
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
    },[active, time])

    const handlePlay = () => {
        setActive(true)
    }
    const handlePause = () => {
        setActive(false)
    }
    const handleReset = () => {
        setActive(false)
        setTime(0)
    }

    return(
        <section>
           <CounterNumber number={time}/>
           {active?<button onClick={handlePause}>PAUSE</button>:<button onClick={handlePlay}>PLAY</button>}
           <button onClick={handleReset}>RESET</button>
        </section>
    )
}

