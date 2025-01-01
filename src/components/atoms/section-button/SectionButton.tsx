interface Props{
  direction: string;
  scroll: (text: string) => void;
  isScrolling?: boolean;
}

function SectionButton({direction, scroll, isScrolling}: Props){
  return (
    <button
      className="slider__left-button slider__arrow-buttons"
      onClick={() => scroll('prev')}
      disabled={isScrolling}
    >
      {direction === "next" ? "&#10095;" : "&#10094;" }
    </button>

  );
}

export {SectionButton};