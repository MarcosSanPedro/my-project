import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import backGroundImage from './assets/fantasmita.jpg'


document.body.style.backgroundImage = `url(${backGroundImage})`
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundPosition = 'center'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
