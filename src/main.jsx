import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Mastodon from './pages/Mastodon'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/mastodon" element={<Mastodon />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
