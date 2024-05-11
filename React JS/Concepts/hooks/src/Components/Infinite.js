import React, { useEffect, useState } from 'react'

function Infinite() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`;

        // not an infinite loop as it uses stack 
        setCount(100);
    },)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Infinite
