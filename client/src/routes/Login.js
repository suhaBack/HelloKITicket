import { React } from 'react-router-dom';
import "../css/login.css"

// 정선우, 박준호 공동 제작 (css 포함)

const Login = () => {

  const alertLogin = () => {
    return alert("로그인 성공");
  }

  return (
    
    <div id="container2">
      <div id='login_logo'>
        <h1>Melon 티켓</h1>
      </div>
      <div id="body1">
        <img id='login_door' src='images/icons/login_door.jpg'/>
        <h1>ID 로그인</h1>
        <form></form>
          <fieldset id="membership_css">
            <ul>
              <li>
                <input type="text" id="uid" autofocus placeholder="  아이디" required/> 
              </li>
              <li>
                <input type="password" id="pwd1" placeholder="  비밀번호" required/> 
              </li> 
            </ul>
          </fieldset>
          <div class='login_ch'>
            <input type="checkbox" id='ch1'/>
            <label for="ch1"><span>로그인 상태 유지</span></label>
          </div>
          <div class="switch_login">
            <span>IP보안</span>
            <label class="switch">
              <input type="checkbox"/>
              <span class="slider"></span>
            </label>
          </div>
          <div id="buttons2" >
            <button onClick={alertLogin}>
              로그인
            </button>
          </div>
      </div>
    </div>
    
    );
};



export default Login;