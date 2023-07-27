import React from "react";

export default function Square({ val, chooseSquare }) {
    //burada satırları ve sütunları yapıyoruz
    return (
        <div className="square" onClick={chooseSquare}>
            {val}
        </div>
    )
}