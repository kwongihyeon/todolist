import "./App.css";
import { useState } from "react";

function App() {
  let [list, Setlist] = useState([]);
  let [add, Setadd] = useState("");

  const onchange = (e) => {
    Setadd(e.target.value);
  };

  const onclick = () => {
    let cp = [...list, add];
    Setlist(cp);
  };

  return (
    <div className="main">
      <div>
        <input onChange={onchange}></input>
        <button onClick={onclick}>+</button>
      </div>
      <div>
        {list.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
