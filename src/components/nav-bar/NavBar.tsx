import {NavElement} from "../nav-element/NavElement";
import {useState} from "react";

function NavBar() {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <nav className="nav">
      <ul className="nav__elements-list">

        <a href="#" className="nav__home-button">
          <img src="nav-icons/disney-logo.png" alt="Logo de Disney" width={86} height={48}/>
        </a>
        <NavElement className="nav__element" text="Inicio" src="nav-icons/home-icon.svg"/>
        <NavElement className="nav__element" text="Búsqueda" src="nav-icons/search-icon.svg"/>
        <NavElement className="nav__element" text="Mi Lista" src="nav-icons/plus-icon.svg"/>
        <NavElement className="nav__element" text="ESPN" src="nav-icons/espn-icon.svg"/>
        <NavElement className="nav__element" text="Películas" src="nav-icons/movie-icon.svg"/>
        <NavElement className="nav__element" text="Series" src="nav-icons/tv-icon.svg"/>
        <NavElement className="nav__element" text="Originales" src="nav-icons/start-icon.svg"/>

      </ul>

      <div
        className={showOptions ? "nav__account-options nav__account-options--active" : "nav__account-options"}
        onClick={() => setShowOptions(!showOptions)}>

        <div className="nav__current-account">
          <span className="nav__current-account__name">YEISON</span>
          <img className="nav__current-account-image" src="https://randomuser.me/api/portraits/women/75.jpg" alt="" />
        </div>


        <div className={showOptions ? "hidden-menu--active hidden-menu" : "hidden-menu"}>

          <div className="hidden-menu__other-accounts-container">
            <div className="nav__current-account">
              <img className="nav__current-account-image" src="https://randomuser.me/api/portraits/women/75.jpg"
                   alt=""/>
              <span className="nav__current-account__name">ACCOUNT 1</span>
            </div>
            <div className="nav__current-account">
              <img className="nav__current-account-image" src="https://randomuser.me/api/portraits/women/75.jpg"
                   alt=""/>
              <span className="nav__current-account__name">Crear perfil</span>
            </div>
          </div>

          <ul className="hidden-menu__options-container">
            <li className="hidden-menu__option">Editar perfiles</li>
            <li className="hidden-menu__option">Ajustes de aplicación</li>
            <li className="hidden-menu__option">Cuenta</li>
            <li className="hidden-menu__option">Ayuda</li>
            <li className="hidden-menu__option">Cerrar sesión</li>
          </ul>

        </div>

      </div>
    </nav>
  );
}

export {NavBar};
