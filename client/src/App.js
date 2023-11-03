import "./App.css";
import Header from "./component/Header/header.js";
import ScrollToTopButton from './topbtn.js'
import Main from "./component/Main/main.js";
import Concert from "./component/Pages/concert/concert.js";
import Musical from "./component/Pages/musical/musical.js";
import Classic from "./component/Pages/classic/classic.js";
import Exhibition from "./component/Pages/exhibition/exhibition.js";
import Ranking from "./component/Pages/ranking/ranking.js";
import Event from "./component/Pages/event/event.js";
import EventDetail from "./component/Pages/event/eventdetail.js";
import Register from "./component/Pages/register/register.js";
import Mypage from "./component/Pages/mypage/mypage.js";
import Footer from "./component/Footer/footer.js";
import NewTicket from "./component/Pages/newTicket/newTicket.js"
import TicketPage from "./component/Pages/ticketpage/index.js"
import Create from "./component/Pages/create/create.js"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <ScrollToTopButton></ScrollToTopButton>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/concert" element={<Concert></Concert>}></Route>
        <Route path="/musical" element={<Musical></Musical>}></Route>
        <Route path="/classic" element={<Classic></Classic>}></Route>
        <Route path="/exhibition" element={<Exhibition></Exhibition>}></Route>
        <Route path="/ranking" element={<Ranking></Ranking>}></Route>
        <Route path="/event" element={<Event></Event>}></Route>
        <Route path="/event/:id" element={ <EventDetail></EventDetail>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/newTicket" element={<NewTicket></NewTicket>}></Route>
        <Route path="/ticketpage" element={<TicketPage></TicketPage>}></Route>
        <Route path="/eventCreate" element={<Create></Create>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;