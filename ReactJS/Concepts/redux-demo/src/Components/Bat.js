import React, { useState } from 'react'
import { connect } from 'react-redux';

function Bat(props) {

    // This state is local to the component
    const [bat, setBat] = useState(20);
    console.log(props);

    return (
        <div>
            <h1>Bats: {props.bats}</h1>
            <button onClick={props.buyBat}>Buy Bat</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bats: state.bat.bats
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        // args of dispatch function is "Action"
        buyBat: () => dispatch({ type: "BUY_BAT" })
    }
}

// connect method gives state to mapStateToProps function
export default connect(mapStateToProps, mapDispatchToProps)(Bat);
