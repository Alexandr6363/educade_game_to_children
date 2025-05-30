import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CompareNumber from "./CompareNumber";
import MathematicFunction from "./MathematicFunction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dictionary from "./Dictionary";
import BigInt from "./BigInt";
import Syr from "./Syr";

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
    element: <BigInt />,
  },
  {
    path: "/game_dict",
    element: <Dictionary />,
  },
  {
    path: "/game_syr",
    element: <Syr />,
  },
  {
    path: "/",
    element: (
      <div className="main-menu">
        <h2>Развивающие игры для детей от 2 до 5. Просто распечатать!</h2>
        <a className="main-menu_element" href="/game_numb">
          Сравни числа
        </a>
        <a className="main-menu_element" href="/game_math">
          Посчитай
        </a>
        <a className="main-menu_element" href="/game_big_int">
          Прочитай число
        </a>
        <a className="main-menu_element" href="/game_dict">
          Игра в слова
        </a>
        <a className="main-menu_element" href="/game_syr">
          Прочитай слова
        </a>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
