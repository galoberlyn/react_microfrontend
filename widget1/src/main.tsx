import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

export const widgetLibrary = {
  createWidget: () => {
    ReactDOM.createRoot(document.getElementById('widget1')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
}

export const Widget1 = Object.freeze(widgetLibrary)
