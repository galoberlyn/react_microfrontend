import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

export const widgetLibrary = {
  createWidget: () => {
    ReactDOM.createRoot(document.getElementById('widget2')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }
}


export const Widget2 = Object.freeze(widgetLibrary)
