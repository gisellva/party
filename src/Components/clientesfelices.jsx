import React from "react";
import ReactPlayer from "react-player";
import Cartsclientes from "./cartsclientes";



const Clientesfelicescomponente = () => {
  return (
    <>
    <div className="reproductor-container">
      <div style={{ width: 500, height: 500 }} className="reproductor">
        <ReactPlayer
          url="https://www.youtube.com/shorts/6Yw6yWyPPjg"
          width={450}
          height={450}
          controls
        />
      </div>
      </div>
    <Cartsclientes/>
     
    </>
  );
};

export default Clientesfelicescomponente;
