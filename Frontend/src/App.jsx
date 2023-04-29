import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/HomePage/HomePage";
import Login from "./containers/LoginPage/LoginPage";
import Dashboard from "./containers/DashboardPage/DashboardPage";
import SignIn from "./containers/SignInPage/SignInPage";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Footer from "./components/common/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
]);

function App() {
  return (
    <>
      <div className="main-app-container">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
