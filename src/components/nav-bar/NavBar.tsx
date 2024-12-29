import { NavElement } from "../nav-element/NavElement";

function NavBar() {
  return (
    <nav className="nav">
      <a href="#" className="nav__home-button">
        Inicio
      </a>
      <ul className="nav__elements-list">
        <NavElement text="Inicio" src="nav-icons/home-icon.svg" />

        <NavElement text="Búsqueda" src="nav-icons/search-icon.svg" />

        <NavElement text="Mi Lista" src="nav-icons/plus-icon.svg" />

        <NavElement text="ESPN" src="nav-icons/espn-icon.svg" />
        <NavElement text="Películas" src="nav-icons/movie-icon.svg" />

        <NavElement text="Series" src="nav-icons/tv-icon.svg" />

        <NavElement text="Originales" src="nav-icons/start-icon.svg" />
      </ul>
      <div className="nav__profile-container"></div>
    </nav>
  );
}

export { NavBar };
