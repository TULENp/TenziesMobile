import React, { Fragment, useState } from 'react'

export function Score() {
    const scoreString = localStorage.getItem("score");
    const [score, setDice] = useState(scoreString);

    // const scoreList: JSX.Element[] = scoreString.map(el =>
    //     <h2>{difficulty} | {count}</h2>)

    return (
        <div className="score">
            <h2>difficulty | count</h2>
            {scoreString}
        </div>

    )
}
