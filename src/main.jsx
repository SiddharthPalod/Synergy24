import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Lazy load the components
const Homepg = lazy(() => import('./pages/Homepg'));
const Events = lazy(() => import('./pages/Events'));
const Team = lazy(() => import('./pages/Team'));
const Workshop = lazy(() => import('./pages/Workshop'));
const EventPage = lazy(() => import('./pages/EventPage'));
console.warn = function() {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Homepg />} />
          <Route path='/events' element={<Events />} />
          <Route path='/workshop' element={<Workshop />} />
          <Route path="/:event_day/:event" element={<EventPage />} />
          {/* <Route path='/sponsors' element={<Sponsors />} /> */}
          <Route path='/team' element={<Team />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
