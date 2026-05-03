import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { EVENTS } from '@/data/events';
import { reportIssues, validateEvents } from '@/game/validateEvents';
import '@/styles/globals.css';

if (import.meta.env.DEV) {
  reportIssues(validateEvents(EVENTS));
}

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('#root nie znaleziony w index.html');

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
