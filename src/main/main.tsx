import React from 'react'
import ReactDOM from 'react-dom/client'

import '../presentations/styles/styles.css'
import Home from '../presentations/pages/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
