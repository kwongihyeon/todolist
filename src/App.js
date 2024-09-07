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
    let cp = [
      ...list,
      {
        id: number,
        text: add,
        switch: false,
      },
    ];
    Setnumber(number + 1);
    Setlist(cp);
    Setadd("");
  };

  /*   const ondelete = (id) => {
    let cp2 = [...list];
    let dt = cp2.filter((cp2) => id !== cp2.id);
    Setlist(dt);
  }; */

  const checkclick = (id) => {
    const sibal = list.map((n) =>
      n.id === id ? { ...n, switch: !n.switch } : n
    );
    Setlist(sibal);
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
      <div className="input">
        <input value={add} onChange={onchange}></input>
        <button onClick={onclick}>+</button>
      </div>
      <div>
        {list.map((n, index) => (
          <Mycompo
            n={n}
            checkclick={checkclick}
            onupdate={onupdate}
            key={n.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
