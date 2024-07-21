/*
The JSX gets converted to React.createElement function calls.
The return value of a React Component is an Object.

React Component: A function or class that optionally takes inputs (props) and returns a React element.
Component Instance: A single occurrence of a component in the UI, maintaining its own state and lifecycle.
React Element: A plain object representing what to render, created by invoking a component.
*/

const App = (props) => {

    return (
        <div>
            App component
        </div>
    )
}

export default App;