import "./App.css";
import { useState } from "react";
import React from "react";
import Mycompo from "./Mycompo";
import { useEffect } from "react";

function App() {
  let [list, Setlist] = useState([]);
  let [add, Setadd] = useState("");
  let [number, Setnumber] = useState(1);

  const onchange = (e) => {
    Setadd(e.target.value);
  };

  const onclick = () => {
    let cp = {
      id: number,
      text: add,
      switch: false,
    };

    fetch("http://localhost:3000/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cp),
    })
      .then((res) => res.json())
      .then((plus) => {
        Setlist([...list, plus]);
        console.log(list);
        Setnumber(number + 1);
      })
      .catch((error) => console.error("에러", error));

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

    fetch(`http://localhost:3000/list/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sibal),
    })
      .then((res) => res.json())
      .then((up) => {
        const uplist = list.map((n) => (n.id === id ? up : n));
        Setlist(uplist);
      })
      .catch((error) => console.error("수정에러", error));
  };

  /*   const onupdate = (id) => {
    let cpcontent = [...list];

    cpcontent.map((cpcontent) => {
      if (cpcontent.id === id) {
        cpcontent.text = add;
      }
    });
    Setlist(cpcontent);
  };
 */
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
            // onupdate={onupdate}
            key={n.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
