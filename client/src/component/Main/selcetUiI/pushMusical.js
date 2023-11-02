import { useEffect, useState } from "react";
import jpg1 from "./../images/musical/1.gif";
import jpg2 from "./../images/musical/2.gif";
import jpg3 from "./../images/musical/3.gif";
import jpg4 from "./../images/musical/6.gif";

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
