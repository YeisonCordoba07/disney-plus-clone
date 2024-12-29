interface Props{
    text: string,
    src: string,
}

function NavElement({text, src = "nav-icons/tv-icon.svg"}: Props){
    return(
        <div className="nav-element">

            <img className="nav-element__svg" src={src} alt="nav icon"/>
               
            <span className="nav-element__text">{text.toUpperCase()}</span>
            
        </div>
    );
}

export {NavElement}