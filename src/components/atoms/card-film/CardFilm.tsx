interface Props {
  imageSource: string,
  isLarge?: boolean,
}

function CardFilm({imageSource, isLarge = false}: Props) {

  return (

    <article className={isLarge ?
      "card-film disney-shadow disney-outline-hover disney-outline-hover--large" :
      "card-film disney-shadow disney-outline-hover disney-outline-hover--medium"}>
      <img
        className={isLarge ? "card-film__image card-film__image--large":"card-film__image"}
        src={imageSource} alt=""/>
    </article>

  );
}

export {CardFilm};