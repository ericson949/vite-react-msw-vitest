import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    worker.start()
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
