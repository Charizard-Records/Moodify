import './main.css';
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index={true}  path="/" element={<MainPage />} />
        <Route  path="/profile" element={<ProfilePage />} />
      </Route>
    )
  );

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
