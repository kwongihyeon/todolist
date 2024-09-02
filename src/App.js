import "./App.css";
import { useState } from "react";

function App() {
  let [list, Setlist] = useState([]);
  let [add, Setadd] = useState("");

  const onchange = (e) => {
    Setadd(e.target.value);
    console.log(add);
  };

  const onclick = () => {
    let cp = [...list];
    cp.unshift(add);
    Setlist(cp);
    console.log(list);
  };

  return (
    <div className="main">
      <div>
        <input onChange={onchange}></input>
        <button onClick={onclick}>+</button>
      </div>
      <div>{list}</div>
    </div>
  );
}

export default App;
