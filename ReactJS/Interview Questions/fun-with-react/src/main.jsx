import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const Print = () => {

  console.log(App("Harsh"));
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Print/>
    <App/>
  </React.StrictMode>,
)
