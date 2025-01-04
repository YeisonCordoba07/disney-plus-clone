import {SliderItem} from "@/components/molecules/slider-item/SliderItem";
import MovieJson from "@/mock/slider-items.json";
import {useEffect, useRef, useState} from "react";
import {SectionButton} from "@/components/atoms/section-button/SectionButton";


function Slider() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const movies = MovieJson;
  const [isScrolling, setIsScrolling] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (isScrolling || !listRef.current) return;
    setIsScrolling(true);

    const container = listRef.current;
    const item = container.querySelectorAll('.slider-item')[currentIndex];


    item.scrollIntoView({
      behavior: 'smooth',
      inline: "center",
    });

    setIsScrolling(false);

  }, [currentIndex]);

  function scrollToImage(direction: string) {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? movies.length - 1 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === movies.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      } else {
        setCurrentIndex(0);
      }
    }
  }


  return (
    <section>
      <div className="slider-container">

        {/* Prev button */}
        <SectionButton
          direction={"prev"}
          scrollFunction={() => scrollToImage("prev")}
          isScrolling={isScrolling}
        />


        {/* Slider */}
        <div
          className="slider-item-container"
          ref={listRef}
        >
          {movies.map((movie, index) => (
            <SliderItem
              movie={movie}
              key={`${movie.id}-${index}`}
            />
          ))}
        </div>


        {/* Nex button */}
        <SectionButton
          direction={"next"}
          scrollFunction={() => scrollToImage("next")}
          isScrolling={isScrolling}
        />


        {/* Slider Pagination */}
        <div className="slider__pagination-container">
          {
            movies.map((movie, index) => (

              <button
                className={"slider__pagination-button"}
                key={movie.id}
                onClick={() => {
                  setCurrentIndex(index)
                }}
              >
                <div className={currentIndex === index ?
                  "slider__pagination-button-style slider__pagination-button-style--active" :
                  "slider__pagination-button-style"}>

                </div>
              </button>

            ))
          }

        </div>
      </div>

    </section>
  );
}


export {Slider};