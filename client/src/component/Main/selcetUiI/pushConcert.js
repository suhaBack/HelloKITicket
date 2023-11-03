import { useEffect, useState } from 'react';
import jpg1 from "./../images/concert/1.gif";
import jpg2 from "./../images/concert/2.jpg";
import jpg3 from "./../images/concert/3.gif";
import jpg4 from "./../images/concert/4.gif";

function PushConcert(){
  let push = [jpg1, jpg2, jpg3, jpg4];
  let [end, setEnd] = useState('');
  useEffect(()=>{
    setTimeout(() => {
      setEnd('end')
    }, 100);
    return setEnd("")
  },[])
  return (
    <div className={"selcetBox"}>
      <div className={"start " + end}>
        <img src={push[0]}></img>
        <img src={push[1]}></img>
        <img src={push[2]}></img>
        <img src={push[3]}></img>
      </div>
    </div>
  )
}

export default PushConcert;