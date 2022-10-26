import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./home";
import { AddIngredientPage } from "./ingredients";
import { RecipeSearchPage } from "./recipes";
import { ShoppingListPage } from "./shopping-list";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add-ingredient",
    element: <AddIngredientPage />,
  },
  {
    path: "/recipes",
    element: <RecipeSearchPage />,
  },
  {
    path: "/shopping-list",
    element: <ShoppingListPage />,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
