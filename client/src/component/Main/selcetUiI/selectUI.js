import { useState } from 'react';
import { Nav } from "react-bootstrap";
import PushMusical from './pushMusical';
import PushConcert from './pushConcert';
import PushExhibition from './pushExhibition';
import "./selectUi.css";

function UiSelect() {
  let [selcet, setSelect] = useState(0);
  return (
    <div>
      <Nav style={{paddingLeft: '2vw'}}variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link className="selcetNav" eventKey="link0" onClick={()=>{
            setSelect(0)
          }}>추천 뮤지컬</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="selcetNav" eventKey="link1" onClick={()=>{
            setSelect(1)
          }}>추천 콘서트</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="selcetNav" eventKey="link2" onClick={()=>{
            setSelect(2)
          }}>추천 전시회</Nav.Link>
        </Nav.Item>
      </Nav>
      <Uicontent selcet={selcet}></Uicontent>
    </div>
  );
}

function Uicontent(props) {
  return [<PushMusical/>,<PushConcert/>,<PushExhibition/>][props.selcet]
}
export default UiSelect;
