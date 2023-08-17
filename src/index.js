import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EventPage from './pages/EventPage';
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
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);


