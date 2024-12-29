import {AgeAdvisor} from "@/components/atoms/age-advisor/AgeAdvisor";

function SliderItem() {
  return (
    <section className="section-slider">
      <div className="slider-item">
        <img className="slider-item__image" src="/slider-icons/imagen3.webp"/>
      </div>

      <div className="title-container">
        <img className="image-title" src="/slider-icons/imagen3-title.webp"/>
        <div className="text-container">
          <span>Todos los episodios ya disponibles</span>
          <div className="text-category"><AgeAdvisor>16</AgeAdvisor> <span>2024 Acción y aventura, Espionaje</span></div>
        </div>
      </div>
    </section>

  );
}

export {SliderItem};