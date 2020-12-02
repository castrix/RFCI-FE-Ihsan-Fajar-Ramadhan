import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput]=useState("");
  const [output, setOutput]=useState("");
  const [reversed, setReversed]=useState(false);
  const [undo, setUndo]=useState(false);

  const handleChange=(e)=>{
        setInput(e.target.value);
        setOutput(e.target.value);
    }
    const handleReverse=()=>{
        input && setOutput(input.split("").reverse().join(""));
        setReversed(true)
    }
    const handleUndo=()=>{
        reversed && setOutput(output.split("").reverse().join(""));
        reversed && setUndo(true);
        reversed && setReversed(false);
    }
    const handleRedo=()=>{
        undo && setOutput(output.split("").reverse().join(""));
        undo && setReversed(!reversed);
        undo && setUndo(!undo);
    }
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={e=>handleChange(e)} />
        <h2>
          {`Output: ${output}`}
        </h2>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleUndo} onDoubleClick={handleRedo}>Undo/Redo</button>
        </div>
      </header>
    </div>
  );
}

export default App;
