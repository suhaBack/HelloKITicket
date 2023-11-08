import add from "./images/add.jpg";

function MainAdBanner() {
  return (
    <div>
      <img
        src={add}
        style={{ cursor: "pointer" }}
        width="100%"
      ></img>
    </div>
  );
}

export default MainAdBanner;
