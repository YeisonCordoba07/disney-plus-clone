import FilmsJson from "@/mock/mock-films.json";
import {CardFilm} from "@/components/atoms/card-film/CardFilm";
import {SectionButton} from "@/components/atoms/section-button/SectionButton";
import {useEffect, useRef, useState} from "react";

function CardFilmList() {

  const filmsData = FilmsJson;
  const listRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const prueba = {
    containerWidth: 0,
    cardWidth: 0,
    gap: 16
  }

  function changeDirection(){
    const container: HTMLDivElement | null = listRef.current;
    const gap = 16;
    const numberOfElements = Math.trunc(containerWidth / (cardWidth + gap));
    console.log("Total ancho: ", numberOfElements);
    console.log(containerWidth);
    console.log(cardWidth);

    console.log("Total desplazamiento: ", container.scrollLeft + (cardWidth * numberOfElements) + (gap*numberOfElements));


    container?.scrollTo({
      left: container.scrollLeft + (cardWidth * numberOfElements) + (gap*numberOfElements),
      behavior: "smooth"
    })

  }



  useEffect(() => {
    const container: HTMLDivElement | null = listRef.current;
    setContainerWidth(container?.offsetWidth || 0);
    setCardWidth(container?.querySelector(".card-film")?.offsetWidth || 0);

  }, [])




  return (
    <article className="card-film-list">
      <button onClick={() => {
        changeDirection()
      }}>NEXT
      </button>

      <div className="card-film-list__container" ref={listRef}>
        {
          filmsData.map((film) => {
            return (
              <CardFilm imageSource={film.image} key={film.id}/>
            );
          })
        }
      </div>

    </article>
  );
}

export {CardFilmList};