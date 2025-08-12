import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SignalsProvider } from './providers'

createRoot(document.getElementById("root")!).render(
  <SignalsProvider>
    <App />
  </SignalsProvider>
);
