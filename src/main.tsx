import '@patternfly/react-core/dist/styles/base.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
