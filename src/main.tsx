
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const url = new URL(window.location.href)
const redirectPath = url.searchParams.get('redirect')

if (redirectPath) {
  window.history.replaceState({}, '', redirectPath)
}

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App />)
