import "./ranking.css";
import { useState } from "react";
import ConcertRanking from "./concertranking";
import MusicalRanking from "./musicalranking";
import ClassicRanking from "./classicranking";
import ExhibitionRanking from "./exhibitionranking";

function Ranking() {
  const [selectedGenre, setSelectedGenre] = useState(0);
  const genres = ["콘서트", "뮤지컬", "클래식", "전시회"];

  const handleGenreClick = (index) => {
    setSelectedGenre(index);
  };

  return (
    <div className="rankingPage">
      <div className="rankingPageTitle mainTitle">
        <i class="fa-solid fa-ranking-star"></i>
        장르별 랭킹
      </div>
      <div className="rankingNavBox mb-5">
        {genres.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleGenreClick(index)}
            style={{
              backgroundColor:
                selectedGenre === index ? "rgb(255, 166, 180)" : "",
            }}
            className="rankingNav"
          >
            {genre}
          </div>
        ))}
      </div>
      <div className="container">
        {selectedGenre === 0 && <ConcertRanking />}
        {selectedGenre === 1 && <MusicalRanking />}
        {selectedGenre === 2 && <ClassicRanking />}
        {selectedGenre === 3 && <ExhibitionRanking />}
      </div>
    </div>
  );
}

export default Ranking;
