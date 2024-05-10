import React, { useState } from 'react'

function UseState() {

    // useState is used to set state in a functional component

    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({ msg: 'useState' });

    return (
        <div>
            <h1>Count is: {count}</h1>

            {/* If setCount is called directly it will become an infinite loop */}
            {/* <button onClick={setCount(count + 1)}>+</button> */}

            <button onClick={() => setCount(count + 1)}>+</button>
            <h2>{obj.msg}</h2>
        </div>
    )
}

export default UseState
