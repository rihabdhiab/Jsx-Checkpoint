import React from 'react';
import './App.css';
import './style.css';
import srcImage from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw" }}>
        <h1 className="title red">Dhiab Rihab</h1>
        <br />
        <img src={srcImage} alt='image1' width={600} height={400} />
        <br />
        <img src='/imageInPublic.jpg' alt="image2" width={600} height={400}/>
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
        
    </div>
  );
}

export default App;
