import {SliderItem} from "@/components/molecules/slider-item/SliderItem";

function Slider(){
  return(
    <>
      <section>

        <div className="slider-container">

          <button className="slider__left-button slider__arrow-buttons"> &#10094; </button>
          <div className="slider-item-container">
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
          </div>
          <button className="slider__right-button slider__arrow-buttons"> &#10095; </button>

        </div>

        <div className="slider__pagination-container">
          circulos
        </div>

      </section>

    </>

  );
}

export{Slider};