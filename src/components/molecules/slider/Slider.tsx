import {SliderItem} from "@/components/molecules/slider-item/SliderItem";

function Slider(){
  return(
    <>
      <section>

        <div>

          <button> &#10094; </button>
          <div className="slider-container">
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
          <button> &#10095; </button>

        </div>

        <div>
          circulos
        </div>

      </section>

    </>

  );
}

export{Slider};