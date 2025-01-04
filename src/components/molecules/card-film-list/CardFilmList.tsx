import FilmsJson from "@/mock/mock-films.json";
import {CardFilm} from "@/components/atoms/card-film/CardFilm";
import {SectionButton} from "@/components/atoms/section-button/SectionButton";
import {useEffect, useRef, useState} from "react";

interface Props {
  titleCard: string,
  position?: number,
  numberOfElements?: number,
  isLarge?: boolean,
}

function CardFilmList({titleCard, position = 0, numberOfElements = 10, isLarge = false}: Props) {


  const filmsData = isLarge
    ? FilmsJson.filter((_item, index) => index >= 90)
    : FilmsJson.filter((_item, index) => index > position && index <= position + numberOfElements);



  const listRef = useRef<HTMLDivElement | null>(null);
  const [scrollObjects, setScrollObjects] = useState({
    containerWidth: 0,
    cardWidth: 0,
  });


  function changeDirection(direction: string) {
    const container: HTMLDivElement | null = listRef.current;
    if (!container) return;

    const gap = 20;
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
      const cardFilmWidth: HTMLDivElement | null = container.querySelector(".card-film") || null;
      setScrollObjects({
        containerWidth: container.offsetWidth || 0,
        cardWidth: cardFilmWidth?.offsetWidth || 0,
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
          {filmsData.map((film) =>
            isLarge ? (
              <CardFilm imageSource={film.image} key={film.id} isLarge={true} />
            ) : (
              <CardFilm imageSource={film.image} key={film.id}/>
            )
          )}
        </div>

        <SectionButton
          direction={"next"}
          scrollFunction={() => changeDirection("next")}
        />

      </div>


    </article>
  );
}

export {CardFilmList};
