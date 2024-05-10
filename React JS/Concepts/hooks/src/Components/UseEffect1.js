import React, { useEffect, useState } from 'react'

function UseEffect1() {

  const [count, setCount] = useState(0);

  // componentDidMount + componentDidUpdate
  useEffect(() => {

    console.log("useEffect")
    document.title = `Button clicked ${count} times.`

    // Side effects work such as API calls can be done here.
  });

  console.log('render');

  return (
    <div>
      <h1>Current count {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default UseEffect1
