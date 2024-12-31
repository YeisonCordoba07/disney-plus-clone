import {AgeAdvisor} from "@/components/atoms/age-advisor/AgeAdvisor";

import {Movies} from "@/types/type";

interface Props {
  movie: Movies,
}

function SliderItem({movie}: Readonly<Props>) {


  return (

      <div className="slider-item" key={movie.id}>
        {/* Imagen principal del slider */}
        <img className="slider-item__image" src={movie.image.poster} alt="Poster"/>

        {/* Contenedor de información */}
        <div className="slider-info">
          {/* Imagen del título */}
          <img className="slider-info__title-image" src={movie.image.title} alt="Title"/>

          {/* Detalles */}
          <div className="slider-info__details-container">
            <span className="slider-info__text-episodes">{movie.episode}</span>

            <div className="slider-info__advisor-category-container">
              {/* Edad recomendada */}
              <AgeAdvisor>{movie.extra.ageAdvisor}</AgeAdvisor>

              {/* Género y año */}
              <span className="slider-info__advisor-category">
                  {movie.extra.year} {movie.extra.genre.join(", ")}
                </span>
            </div>
          </div>

        </div>

      </div>

  );
}

export {SliderItem};
