import { useState } from "react";
import './Carousel.css';

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="sliderstyles">
      <div>
        <button onClick={goToPrevious} className="leftarrowstyles">
          ❰
        </button>
        <button onClick={goToNext} className="rightarrowstyles">
          ❱
        </button>
      </div>
      <div className="slidestyles" style={slideStylesWidthBackground}></div>
      <div className="dotscontainerstyles">
        {slides.map((slide, slideIndex) => (
          <div className="dotstyle"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}>
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;