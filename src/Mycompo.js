import React from "react";

const Mycompo = ({ n, ondelete, onupdate }) => {
  return (
    <div>
      <span>{n.text}</span>
      <button
        onClick={() => {
          ondelete(n.id);
        }}
      >
        x
      </button>
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
