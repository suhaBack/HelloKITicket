import "./App.css";
import Header from "./component/Header/header.js";
import Main from "./component/Main/main.js";
import Concert from "./component/Pages/concert/concert.js";
import Musical from "./component/Pages/musical.js";
import Classic from "./component/Pages/classic.js";
import Exhibition from "./component/Pages/exhibition/exhibition.js";
import Theme from "./component/Pages/theme.js";
import Ranking from "./component/Pages/ranking.js";
import Event from "./component/Pages/event.js";
import Register from "./component/Pages/register/register.js";
import Mypage from "./component/Pages/mypage.js";
import Footer from "./component/Footer/footer.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/concert" element={<Concert></Concert>}></Route>
        <Route path="/musical" element={<Musical></Musical>}></Route>
        <Route path="/classic" element={<Classic></Classic>}></Route>
        <Route path="/exhibition" element={<Exhibition></Exhibition>}></Route>
        <Route path="/theme" element={<Theme></Theme>}></Route>
        <Route path="/ranking" element={<Ranking></Ranking>}></Route>
        <Route path="/event" element={<Event></Event>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
