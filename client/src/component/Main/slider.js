import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import jpg1 from "./images/1.jpg";
import jpg2 from "./images/2.jpg";
import jpg3 from "./images/3.jpg";
import jpg4 from "./images/4.jpg";
import jpg5 from "./images/5.jpg";
import jpg6 from "./images/6.jpg";
import jpg7 from "./images/7.jpg";

const Carousel = () => {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 5,
    },
  };

  // const handleDragStart = (e) => e.preventDefault();

  const images = [jpg1, jpg2, jpg3, jpg4, jpg5, jpg6, jpg7];

  const items = images.map((image) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <img src={image} alt="" />
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <>
      <div className="mainTitle">이달의 추천작</div>
      <Contain>
        <AliceCarousel
          mouseTracking
          infinite={1000}
          animationDuration={2000}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          autoPlay
          items={items}
          paddingRight={40}
        />
      </Contain>
    </>
  );
};
export default Carousel;

const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 25vw;
  overflow: hidden;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
