import { NavElement } from "../nav-element/NavElement";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__elements-list">

        <a href="#" className="nav__home-button">
          <img src="nav-icons/disney-logo.png" alt="Logo de Disney" width={86} height={48}/>
        </a>
        <NavElement className="nav__element" text="Inicio" src="nav-icons/home-icon.svg" />
        <NavElement className="nav__element" text="Búsqueda" src="nav-icons/search-icon.svg" />
        <NavElement className="nav__element" text="Mi Lista" src="nav-icons/plus-icon.svg" />
        <NavElement className="nav__element" text="ESPN" src="nav-icons/espn-icon.svg" />
        <NavElement className="nav__element" text="Películas" src="nav-icons/movie-icon.svg" />
        <NavElement className="nav__element" text="Series" src="nav-icons/tv-icon.svg" />
        <NavElement className="nav__element" text="Originales" src="nav-icons/start-icon.svg" />

      </ul>
      <div className="nav__profile">
        
        <span className="nav__profile-name">YEISON</span>
        <img className="nav__profile-image" src="https://randomuser.me/api/portraits/women/75.jpg" alt="" width={48} height={48}/>
      </div>
    </nav>
  );
}

export { NavBar };
