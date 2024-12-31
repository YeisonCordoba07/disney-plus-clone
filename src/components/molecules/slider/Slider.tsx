import { SliderItem } from "@/components/molecules/slider-item/SliderItem";
import MovieJson from "@/mock/slider-items.json";
import { useCallback, useEffect, useRef, useState } from "react";



function Slider() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [movies, setMovies] = useState(MovieJson);
  const [isScrolling, setIsScrolling] = useState(false);



  // Aseguramos que el scroll inicial esté centrado
  useEffect(() => {
    if (listRef.current) {
      const container: HTMLDivElement = listRef.current;
      const itemWidth: number = container.querySelector('.slider-item')?.offsetWidth || 0;
      const gap: number = 20;
      // Centramos en el segundo elemento (el primero visible completamente)
      container.scrollLeft = (itemWidth + gap) * 2;
    }
  }, []);





  const scrollToImage = useCallback((direction: 'prev' | 'next') => {
    if (isScrolling || !listRef.current) return;
    setIsScrolling(true);

    const container = listRef.current;
    const items: NodeListOf<HTMLDivElement> = container.querySelectorAll('.slider-item');
    const itemWidth = items[0]?.offsetWidth || 0;
    const gap = 20; // El gap que tienes definido en CSS
    const scrollDistance = itemWidth + gap;

    // Calculamos la dirección del scroll
    const scrollAmount = direction === 'next' ? scrollDistance : -scrollDistance;
    console.log(scrollAmount);



    // Esperamos a que termine la animación
    setTimeout(() => {
      if (direction === 'next') {
        // Movemos el primer elemento al final
        setMovies(prevMovies => {
          const firstMovie = prevMovies[0];
          return [...prevMovies.slice(1), firstMovie];
        });
      } else {
        // Movemos el último elemento al principio
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



    // Hacemos el scroll suave
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',

    });


  }, [isScrolling]);





  return (
    <section>
      <div className="slider-container">
        <button
          className="slider__left-button slider__arrow-buttons"
          onClick={() => scrollToImage('prev')}
          disabled={isScrolling}
        >
          &#10094;
        </button>
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
        <button
          className="slider__right-button slider__arrow-buttons"
          onClick={() => scrollToImage('next')}
          disabled={isScrolling}
        >
          &#10095;
        </button>
      </div>
      <div className="slider__pagination-container">
        circulos
      </div>
    </section>
  );
}

export { Slider };