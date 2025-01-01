interface Props {
  imageSource: string,
}

function CardFilm({imageSource}: Props) {

  return (

    <article className="card-film disney-shadow disney-outline-hover">
      <img
        className="card-film__image"
        src={imageSource} alt=""/>
    </article>

  );
}

export {CardFilm};