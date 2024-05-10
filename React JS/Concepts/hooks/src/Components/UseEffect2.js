import React, { useEffect, useState } from 'react'

function UseEffect2() {

  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {

    console.log("useEffect")
    document.title = `Button clicked ${count} times.`

  }, []);

  console.log('render');

  return (
    <div>
      <h1>Current count {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default UseEffect2
