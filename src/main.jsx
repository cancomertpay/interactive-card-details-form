import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardContextProvider from './store/CardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
)
