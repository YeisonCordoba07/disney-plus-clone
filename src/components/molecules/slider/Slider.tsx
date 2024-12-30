import {SliderItem} from "@/components/molecules/slider-item/SliderItem";
import MovieJson from "@/mock/slider-items.json";
import {useEffect, useRef, useState} from "react";

function Slider() {

  const listRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const listNode = listRef.current;
    // @ts-ignore
    const imgNode = listNode.querySelectorAll(".slider-item > .slider-item__image")[currentIndex];

    console.log(listNode);

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }

  }, [currentIndex]);


  const scrollToImage = (direction: string) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? MovieJson.length - 1 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === MovieJson.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      } else {
        setCurrentIndex(0);
      }
    }
  }


  return (
    <>
      <section>

        <div className="slider-container">

          <button className="slider__left-button slider__arrow-buttons"
                  onClick={() => scrollToImage('prev')}> &#10094; </button>
          <div className="slider-item-container" ref={listRef}>
            {MovieJson.map(movie => {
              return (
                <SliderItem movie={movie} key={movie.id}></SliderItem>
              )
            })}


          </div>
          <button className="slider__right-button slider__arrow-buttons"
                  onClick={() => scrollToImage('next')}> &#10095; </button>

        </div>

        <div className="slider__pagination-container">
          circulos
        </div>

      </section>

    </>

  );
}

export {Slider};