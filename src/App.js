import "./App.css";
import { useState } from "react";
import React from "react";
import Mycompo from "./Mycompo";
import { useEffect } from "react";
import uuid from "react-uuid";

function App() {
  let [list, Setlist] = useState([]);
  let [add, Setadd] = useState("");
  let [number, Setnumber] = useState(1);
  let [exam, Setexam] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3000/list")
      .then((response) => response.json())
      .then((data) => Setlist(data));
  }, []);
  const onchange = (e) => {
    Setadd(e.target.value);
  };

  const onclick = () => {
    let cp = {
      id: uuid(),
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
    Setlist(sibal);
  };

  const onupdate = (id) => {
    const bs = list.find((n) => n.id === id);

    fetch(`http://localhost:3000/list/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bs),
    })
      .then((res) => res.json())
      .then((up) => {
        const uplist = list.map((n) => (n.id === id ? { ...n, text: add } : n));
        console.log(list);
        Setlist(uplist);
      })
      .catch((error) => console.error("수정에러", error));
  };

  const example = () => {
    Setexam(exam + 1);
    console.log(exam);
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
      <button onClick={example}>예제</button>
    </div>
  );
}

export default App;
