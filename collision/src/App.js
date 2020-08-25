import React, { useState, useEffect } from 'react';

import './App.css';
import Sprit from './Sprit';

function App() {

  const fps= Math.ceil(1000/60);

  const [sprits, setSprits] = useState([{x:0,y:0,vx: 1, vy: 1}, {x:100,y:10,vx: -1, vy: 2}, {x:200,y:300,vx: -1, vy: 1}, {x:400,y:300,vx: -1, vy: 1}]);
  const [container, setContainer] = useState({ height: 100 , width: 100});

  useEffect(() => {
    const height = document.getElementById('container').clientHeight;
    const width = document.getElementById('container').clientWidth;
    setContainer({height,width });

    setInterval(() => {
      const spritsSnapshot = sprits.map(s => ({...s}));
      setSprits( ss => ss.map((s,index) =>{
        return getNextPosition(s,width , height, index, spritsSnapshot);
      }));
    }, fps);

  }, [fps])

  const getNextPosition = (s, width, height, index, spritsSnapshot) => {
    if(s.x + 40 >= width || s.x  < 0 ){
      s.vx = -s.vx;
    }else

    if(s.y + 40 >= height || s.y < 0 ){
      s.vy = -s.vy;
    }

    // Todo :You have to write code for collision here



    s.x = s.x + s.vx;
    s.y = s.y + s.vy;
    return s;
  };






  return (
    <div className="App">
      <header id="container" className="App-header">
        { sprits.map((data) => <Sprit data={data}  />)}

      </header>
    </div>
  );
}

export default App;
