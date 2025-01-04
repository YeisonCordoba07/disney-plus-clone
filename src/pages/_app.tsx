import "@/styles/globals.css";
import "@/components/atoms/nav-element/NavElement.scss";
import "@/components/molecules/nav-bar/NavBar.scss";
import "@/components/atoms/age-advisor/AgeAdvisor.scss";
import "@/components/molecules/slider/Slider.scss";
import "@/components/molecules/slider-item/SliderItem.scss";
import "@/components/molecules/main-collections/MainCollections.scss";
import "@/components/atoms/item-collection/ItemCollection.scss";
import "@/components/atoms/card-film/CardFilm.scss";
import "@/components/molecules/card-film-list/CardFilmList.scss";
import "@/components/atoms/section-button/SectionButton.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
