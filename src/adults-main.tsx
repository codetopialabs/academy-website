import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Adults } from './Adults'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Adults />
  </StrictMode>,
)
