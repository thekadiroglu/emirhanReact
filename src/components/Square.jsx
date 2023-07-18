import React from "react";

export default function Square({val, chooseSquare}) {
    return (
        <div className="square" onClick={chooseSquare}>
            {val}
        </div>
    )
}