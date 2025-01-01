import FilmsJson from "@/mock/mock-films.json";
import {CardFilm} from "@/components/atoms/card-film/CardFilm";

function CardFilmList() {

  const filmsData = FilmsJson;

  return (
    <article className="card-film-list">

      {
        filmsData.map((film) => {
          return (

            <CardFilm imageSource={film.image}/>

          );
        })

      }

    </article>
  );
}

export {CardFilmList};