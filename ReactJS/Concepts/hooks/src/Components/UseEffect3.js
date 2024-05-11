import React, { useEffect, useState } from 'react'

function UseEffect3() {

    const [count, setCount] = useState(0);
    const [txt, setText] = useState({ msg: '' });

    useEffect(() => {

        console.log('useEffect');
        document.title = `Button clicked ${count} times`;

    }, [count])

    let changeText = (e) => {

        txt.msg = e.target.value;
        setText({ ...txt })
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input type="text" onChange={(e) => changeText(e)} value={txt.msg} />
        </div>
    )
}

export default UseEffect3
