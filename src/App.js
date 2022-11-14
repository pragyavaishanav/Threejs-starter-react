
import React, {useState, useRef, useEffect} from 'react';
import { ThreeApp } from './canvas/threeApp';

function App() {
  const divRef = useRef(null);
  let addThreeApp = true;

  useEffect(() => {
    if(!divRef) return;
    if(addThreeApp){
      const threeApp = new ThreeApp(divRef.current);
      addThreeApp = false;
    }
  }, [divRef]) 

  
  return (
    <div className="App" ref={divRef}>
    </div>
  );
}

export default App;
