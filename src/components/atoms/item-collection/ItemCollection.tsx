import {useRef} from "react";

interface Props {
  videoSource: string,
  imageSource: string,
}

function ItemCollection({videoSource, imageSource}: Props) {

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    videoRef.current?.play();
  };


  return (
    <article
      className="item-collection"
      onMouseOver={handleMouseOver}
    >
      <img className="item-collection__image" src={imageSource} alt=""/>
      <video className="item-collection__video" ref={videoRef} muted loop>
        <source src={videoSource} type="video/mp4"/>
      </video>
    </article>
  );
}

export {ItemCollection};