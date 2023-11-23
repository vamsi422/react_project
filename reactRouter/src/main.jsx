import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  User,
  Github,
  GithubInfoLoader,
} from "./components";

//first way of creating routs

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// second way of creating routs

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={GithubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
