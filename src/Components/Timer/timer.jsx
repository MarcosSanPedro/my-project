import { useEffect, useState } from "react";

export function Timer(){
    const [timer, setTimer] = useState(0);
    const [pause, setPause] = useState(false);
    const [alarm, setAlarm] = useState(null);



    useEffect(()=>{
        if(!pause){
    const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1) 
    }, 1000);

    if(timer == alarm){
        alert(`Timer has reach ${alarm}S`)
        setAlarm(null)
    }




    return () => clearInterval(interval);
}
},[pause, timer, alarm]);


function reset(){
    setTimer(0)
   }

   function putPlay(){
    setPause(false)
   }

   function putPause(){
    setPause(true)
   }

   function alarmValue(e){
    setAlarm(e.target.value)
   }

   


    return (
        <div className="flex flex-col items-center mt-14">
          <p className="fs-12 text-lg">{timer}</p>
          <div className="flex gap-9">
          <button className="p-2 border border-2 border-blue-500" onClick={reset}>Reset</button>
          {pause 
          ?  <button className="p-2 border border-2 border-blue-500" onClick={putPlay}>Play</button>
          : <button className="p-2 border border-2 border-blue-500" onClick={putPause}>Pausa</button>
}  
</div>
<div>
    <span>Set Timer: </span>
       <input type="number" className="mt-4" onChange={alarmValue}/>
       </div>
        </div>
      );
  
    }