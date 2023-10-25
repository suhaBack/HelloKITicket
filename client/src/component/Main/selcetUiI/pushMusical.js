import { useEffect, useState } from "react";
import jpg1 from "./../images/1.jpg";
import jpg2 from "./../images/2.jpg";
import jpg3 from "./../images/3.jpg";
import jpg4 from "./../images/4.jpg";
import jpg5 from "./../images/5.jpg";
import jpg6 from "./../images/6.jpg";
import jpg7 from "./../images/7.jpg";

function PushMusical() {
  let push = [jpg1, jpg2, jpg3, jpg4];
  let [end, setEnd] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setEnd("end");
    }, 100);
    return setEnd("");
  }, []);

  return (
    <div className={"selcetBox"}>
      <div className={"start " + end}>
        <img src={push[0]}></img>
        <img src={push[1]}></img>
        <img src={push[2]}></img>
        <img src={push[3]}></img>
      </div>
    </div>
  );
}

export default PushMusical;
