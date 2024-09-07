import React from "react";

const Mycompo = ({ n, checkclick, onupdate, on }) => {
  const style = n.switch
    ? { fontSize: "20px", color: "white" }
    : { fontSize: "15px", color: "blue" };

  return (
    <div>
      <span style={style}>{n.text}</span>
      <button
        className="check"
        onClick={() => {
          checkclick(n.id);
        }}
      ></button>
      <button
        onClick={() => {
          onupdate(n.id);
        }}
      >
        수정
      </button>
    </div>
  );
};

export default Mycompo;
