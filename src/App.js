import React from 'react';
import './App.css';
import useWebAnimations, { wobble } from "@wellyshen/use-web-animations";

function App() {

  const { ref, playState, getAnimation } = useWebAnimations({...wobble});


  return (
    <div>
      <div className="target" ref={ref}>
      </div>
      <p>Current animation state: {playState}</p>
      <button onClick={() => getAnimation().pause()}>Pause</button>
      <button onClick={() => getAnimation().play()}>Play</button>
    </div>
  );
}

export default App;
