import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import './index.css';
import '@radix-ui/themes/styles.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="mint" className="min-h-screen flex flex-col">
      <App />
    </Theme>
  </StrictMode>
);
