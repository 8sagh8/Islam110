import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EventPage from './pages/EventPage';
import PersianPage from './pages/PersianPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "EventPage",
    element: <EventPage/>,
  },
  {
    path: "PersianPage",
    element: <PersianPage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);


