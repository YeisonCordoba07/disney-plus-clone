import {ReactNode} from "react";

interface Props{
  children: ReactNode;
}

function AgeAdvisor({children}: Props){
  return(
    <span className="age-advisor">{children}+</span>
  )
}

export {AgeAdvisor}