import "./App.css";
import { useState } from "react";
import React from "react";
import Mycompo from "./Mycompo";

function App() {
  let [list, Setlist] = useState([]);
  let [add, Setadd] = useState("");
  let [number, Setnumber] = useState(1);

  const onchange = (e) => {
    Setadd(e.target.value);
  };

  const onclick = () => {
    let cp = [...list, { id: number, text: add }];
    Setnumber(number + 1);
    Setlist(cp);
    Setadd("");
  };

  const ondelete = (id) => {
    let cp2 = [...list];
    let dt = cp2.filter((cp2) => id !== cp2.id);
    Setlist(dt);
  };

  const onupdate = (id) => {
    let cpcontent = [...list];

    cpcontent.map((cpcontent) => {
      if (cpcontent.id === id) {
        cpcontent.text = add;
      }
    });
    Setlist(cpcontent);
  };

  return (
    <div className="main">
      <div>
        <input value={add} onChange={onchange}></input>
        <button onClick={onclick}>+</button>
      </div>
      <div>
        {list.map((n, index) => (
          <Mycompo n={n} ondelete={ondelete} onupdate={onupdate} key={n.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
