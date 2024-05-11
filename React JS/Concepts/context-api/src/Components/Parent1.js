import React, { useContext } from 'react'
import Child from './Child'
import Context from '../Context/Context'

function Parent1() {

    const theme = useContext(Context);
    console.log("Parent1 called");
    
    return (
        <div className={theme ? "light" : "dark"}>
            Parent1
            <Child/>
        </div>
    )
}

export default Parent1
