import React, { useState } from "react";
import "./App.css";
import GitHubLogin from "./GithubLogin";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {name && <h2>Hai {name}</h2>}
        <GitHubLogin
          clientId="6511090a033970b1b444"
          clientSecret="376253564c794608828cbcf765a6609d2d79796c"
          redirectUri="http://localhost:3000"
          onSuccess={(name) => setName(name)}
          onFailure={(resp) => console.log(resp)}
        />
      </header>
    </div>
  );
}

export default App;
