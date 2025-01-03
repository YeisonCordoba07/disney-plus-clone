import {SliderItem} from "@/components/molecules/slider-item/SliderItem";
import MovieJson from "@/mock/slider-items.json";
import {useCallback, useEffect, useRef, useState} from "react";
import {SectionButton} from "@/components/atoms/section-button/SectionButton";


function Slider() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [movies, setMovies] = useState(MovieJson);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentId, setCurrentId] = useState(0);



  useEffect(() => {
    if (listRef.current) {
      const container: HTMLDivElement = listRef.current;
      const item = container.querySelector('.slider-item') as HTMLDivElement;
      const itemWidth: number = item?.offsetWidth || 0;
      const gap: number = 20;

      container.scrollLeft = (itemWidth + gap) * 2;
      setCurrentId(movies[0].id);
    }
  }, []);




  const scrollToImage = useCallback((direction: 'prev' | 'next') => {
    if (isScrolling || !listRef.current) return;
    setIsScrolling(true);

    const container = listRef.current;
    const items: NodeListOf<HTMLDivElement> = container.querySelectorAll('.slider-item');
    const itemWidth = items[0]?.offsetWidth || 0;
    const gap = 20; // Gap del CSS
    const scrollDistance = itemWidth + gap;

    const scrollAmount = direction === 'next' ? scrollDistance : -scrollDistance;
    console.log(scrollAmount);


    setTimeout(() => {
      if (direction === 'next') {
        setMovies(prevMovies => {
          const firstMovie = prevMovies[0];
          return [...prevMovies.slice(1), firstMovie];
        });


      } else {
        setMovies(prevMovies => {
          const lastMovie = prevMovies[prevMovies.length - 1];
          return [lastMovie, ...prevMovies.slice(0, -1)];
        });


      }

      // Reseteamos la posición del scroll sin animación
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: 'auto'
      });

      setIsScrolling(false);
    }, 900);



    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',

    });


  }, [isScrolling]);


  return (
    <section>
      <div className="slider-container">

        {/* Prev button */}
        <SectionButton
          direction={"prev"}
          scrollFunction={()=>scrollToImage("prev")}
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
          scrollFunction={()=>scrollToImage("next")}
          isScrolling={isScrolling}
        />


        {/* Slider Pagination */}
        <div className="slider__pagination-container">
          {
            movies.map((movie) => (

              <button
                className={currentId === movie.id ? "slider__pagination-button slider__pagination-button--active" : "slider__pagination-button"}
                key={movie.id}
              />

            ))
          }

        </div>
      </div>

    </section>
  );
}

export {Slider};