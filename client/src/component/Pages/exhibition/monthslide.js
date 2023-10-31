import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import jpg1 from "./../../Main/images/1.jpg";
import jpg2 from "./../../Main/images/2.jpg";
import jpg3 from "./../../Main/images/3.jpg";
import jpg4 from "./../../Main/images/4.jpg";
import jpg5 from "./../../Main/images/5.jpg";
import { useState } from 'react';

const MonthCarousel = () => {
  const responsive = {
    0: {
      items: 4,
    },
    512: {
      items: 4,
    },
  };

  // const handleDragStart = (e) => e.preventDefault();

    let [img, setImg] = useState([
      jpg1,
      jpg2,
      jpg3,
      jpg4,
      jpg5,
    ]);

  let [monthExhibition, setmonthExhibition] = useState([
    {
      id: 1,
      title: "타겟",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 2,
      title: "스즈메의 문단속",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 3,
      title: "놉",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 4,
      title: "백두산",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
    {
      id: 5,
      title: "범죄와의 전쟁",
      startDate: "2023-10-27",
      endDate: "2023-11-30",
      location: "서울특별시 송파구",
    },
  ]);

  const items = monthExhibition.map((image, i) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <div className="exhibitionCard">
            <img src={img[i]}></img>
            <div className="exhibitionTitle container">
              {monthExhibition[i].title}
            </div>
            <div className="exhibitionLocation container">
              {monthExhibition[i].location}
            </div>
          </div>
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <>
      <div className="mainTitle">이달의 전시회</div>
      <div className="mb-5 monthExhibitionBox">
        <Contain>
          <AliceCarousel
            mouseTracking
            infinite={1000}
            animationDuration={3000}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
            paddingRight={40}
          />
        </Contain>
      </div>
    </>
  );
};
export default MonthCarousel;


const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1vw;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 20px;
  font-family: "DNFBitBitv2";
  border-radius: 5px;

  img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 5px;
  }
`;
