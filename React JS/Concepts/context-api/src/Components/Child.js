import React from 'react'

function Child() {

    console.log("Child called");

    return (
        <div>
            Child
        </div>
    )
}

// If we don't wish to update context-store we can use React.memo to improve the performance
export default React.memo(Child);
