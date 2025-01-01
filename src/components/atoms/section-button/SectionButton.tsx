interface Props{
  direction: string;
  scrollFunction:  (text: ("prev" | "next")) => void;
  isScrolling?: boolean;
}

function SectionButton({direction, scrollFunction, isScrolling}: Props){
  return (
    <button
      className={direction === "next" ? "section-button section-button--right" : "section-button section-button--left"}
      onClick={() => scrollFunction('prev')}
      disabled={isScrolling}
    >
      {direction === "next" ? "\u276F" : "\u276E"}
    </button>

  );
}

export {SectionButton};