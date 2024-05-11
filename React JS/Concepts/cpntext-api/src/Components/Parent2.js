import React, { useContext } from 'react'
import Context from '../Context/Context'

function Parent2() {

    const theme = useContext(Context);
    console.log("Parent2 called");
    
    return (
        <div className={theme ? "light" : "dark"}>
            Parent2
        </div>
    )
}

export default Parent2
