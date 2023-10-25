import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <form className="sform">
      <h3>회원가입</h3>

      <div className="form-group">
        <label>아이디</label>
        <input type="text" className="form-control" placeholder="ID" />
      </div>

      <div className="form-group">
        <label>비밀번호</label>
        <input type="text" className="form-control" placeholder="Password" />
      </div>

      <div className="form-group">
        <label>비밀번호 확인</label>
        <input
          type="email"
          className="form-control"
          placeholder="Confirm Password"
        />
      </div>

      <div className="form-group">
        <label>이메일</label>
        <input type="password" className="form-control" placeholder="Email" />
      </div>

      <div className="form-group">
        <label>이름</label>
        <input type="password" className="form-control" placeholder="Name" />
      </div>

      <div className="form-group">
        <label>전화번호</label>
        <input
          type="password"
          className="form-control"
          placeholder="Phone number"
        />
      </div>

      <div>
        <div>
          <button type="submit" className="btn-signup">
            가입하기
          </button>
        </div>
      </div>

      <p>
        계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>

      <button className="home-btn">홈으로 돌아가기</button>
    </form>
  );
}

export default Register;
