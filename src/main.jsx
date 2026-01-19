import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import App2 from './App2.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <RoutesWithLayout />
    </BrowserRouter>
  </StrictMode>
);

function RoutesWithLayout() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/workspace" element={<App2 />} />
    </Routes>
  );
}