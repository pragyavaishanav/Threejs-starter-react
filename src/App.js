
import React, {useState, useRef, useEffect} from 'react';
import { ThreeApp } from './canvas/threeApp';

function App() {
  const divRef = useRef(null);

  useEffect(() => {
    if(!divRef) return;
    const threeApp = new ThreeApp(divRef.current);
  }, [divRef]) 

  
  return (
    <div className="App" ref={divRef}>
    </div>
  );
}

export default App;
