interface Props{
    text: string,
    src: string,
    className: string,
}

function NavElement({className, text, src = "nav-icons/tv-icon.svg"}: Props){

  return(
        <div className={`nav-element ${className}`}>

            <img className="nav-element__svg" src={src} alt="nav icon"/>
               
            <span className="nav-element__text">{text.toUpperCase()}</span>
            
        </div>
    );
}

export {NavElement}