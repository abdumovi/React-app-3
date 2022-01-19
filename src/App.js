import React from "react";
import Slider from "./components/slider-menu/Slider";
import MacDes from "./components/mac-des/MacDes";
import Data from './Data';
import Img from "./components/media/Img";
function App (){
  return (
    <div className="container">
      <Slider img={Img}/>
      <MacDes data={Data}/>

    </div>
  );
}

export default App;
