import React from 'react'
import ReactDOM from 'react-dom/client'

import '../presentations/styles/main.css'
import Home from '../presentations/pages/home'
import Context from '../presentations/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context>
      <Home/>
    </Context>
  </React.StrictMode>,
)
