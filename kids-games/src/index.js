import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CompareNumber from './CompareNumber';
import MathematicFunction from './MathematicFunction';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dictionary from './Dictionary';
import BigInt from './BigInt';
  
  
  
  const router = createBrowserRouter([
    {
      path: "/game_numb",
      element: <CompareNumber />,
    },
    {
      path: "/game_math",
      element: <MathematicFunction />,
    },
    {
      path: "/game_big_int",
      element: <BigInt />
    },
    {
      path: "/dict",
      element: <Dictionary />
    },
    {
      path: "/",
      element:  <div className='main-menu'>
                    <a className="main-menu_element" href='/game_numb'>Game Number</a>
                    <a className="main-menu_element" href='/game_math'>Game Math</a>
                    <a className="main-menu_element" href='/game_big_int'>Game Big Int</a>
                    <a className="main-menu_element" href='/dict'>Dict game</a>
                </div>,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
  
      <RouterProvider router={router} />
  
  );