import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter}  from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage.jsx'; 
import AlbumPage from './Pages/AlbumPage/AlbumPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,         
        element: <HomePage />,
      },
      {
        path: "album/:albumId", 
        element: <AlbumPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
