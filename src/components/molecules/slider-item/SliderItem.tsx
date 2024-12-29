import {AgeAdvisor} from "@/components/atoms/age-advisor/AgeAdvisor";

function SliderItem() {
  return (
    <>

      <div className="slider-item">
        <img className="slider-item__image" src="/slider-icons/imagen3.webp" alt=""/>

        <div className="slider-info">
          <img className="slider-info__title-image" src="/slider-icons/imagen3-title.webp"/>
          <div className="slider-info__details-container">
            <span className="slider-info__text-episodes">Todos los episodios ya disponibles</span>

            <div className="slider-info__advisor-category-container">
              <AgeAdvisor>16</AgeAdvisor>
              <span className="slider-info__advisor-category">2024 Acción y aventura, Espionaje</span>
            </div>

          </div>
        </div>
      </div>

    </>

  );
}

export {SliderItem};