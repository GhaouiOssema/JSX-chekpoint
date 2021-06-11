import React from "react";
import './style.css';
import imageInSrc from "./imageInSrc.png"

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Oussema Ghaoui</h1>
        <img src="/imageInPublic.png" alt="first imgs" />
        <br />
        <img src={imageInSrc} alt="seconde imgs" />
      </div>
      <hr />
      <video width="720" height="340" controls>
        <source src="/myvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
