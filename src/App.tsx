import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.page";
import { Login } from "./pages/login/login.page";
import { Register } from "./pages/register/register.page";
import { Dashboard } from "./pages/dashboard/dashboard.page";
import { New } from "./pages/dashboard/new/new.page";
import { CarDetail } from "./pages/car/car.page";

import { Layout } from "./components/layout/layout.component";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car/:id",
        element: <CarDetail />,
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
      },
      {
        path: "/dashboard/new",
        element: (
          <Private>
            <New />
          </Private>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export { router };
