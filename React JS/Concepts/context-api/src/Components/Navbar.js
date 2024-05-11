import React, { useContext } from 'react'
import Context from '../Context/Context'

function Navbar() {

    const theme = useContext(Context);
    console.log("Navbar called");
    
    return (
        <div className={theme ? "light" : "dark"}>
            Navbar
        </div>
    )
}

export default Navbar
