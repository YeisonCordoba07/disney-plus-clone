import FilmsJson from "@/mock/mock-films.json";
import { CardFilm } from "@/components/atoms/card-film/CardFilm";
import { SectionButton } from "@/components/atoms/section-button/SectionButton";
import { useEffect, useRef, useState } from "react";

interface Props{
  titleCard: string,
}

function CardFilmList({titleCard}:Props) {
  const filmsData = FilmsJson;
  const listRef = useRef<HTMLDivElement | null>(null);
  const [scrollObjects, setScrollObject] = useState({
    containerWidth: 0,
    cardWidth: 0,
  });




  function changeDirection(direction: string) {
    const container: HTMLDivElement | null = listRef.current;
    if (!container) return;

    const gap = 16;
    const numberOfElements = Math.trunc(
      scrollObjects.containerWidth / (scrollObjects.cardWidth + gap)
    );

    const signo =
      direction === "next"
        ? numberOfElements * (scrollObjects.cardWidth + gap)
        : -numberOfElements * (scrollObjects.cardWidth + gap);

    container.scrollTo({
      left: container.scrollLeft + signo,
      behavior: "smooth",
    });
  }




  useEffect(() => {
    const container = listRef.current;

    if (!container) return;

    const handleResize = () => {
      setScrollObject({
        containerWidth: container.offsetWidth || 0,
        cardWidth: container.querySelector(".card-film")?.offsetWidth || 0,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);




  return (
    <article className="card-film-list">
      <h4 className="card-film-list__title">{titleCard}</h4>

      <div className="card-film-list__wrapper">

        <SectionButton
          direction={"prev"}
          scrollFunction={() => changeDirection("prev")}
        />

        <div className="card-film-list__container" ref={listRef}>
          {filmsData.map((film) => (
            <CardFilm imageSource={film.image} key={film.id} />
          ))}
        </div>

        <SectionButton
          direction={"next"}
          scrollFunction={() => changeDirection("next")}
        />

      </div>


    </article>
  );
}

export { CardFilmList };
