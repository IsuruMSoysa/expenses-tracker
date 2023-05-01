import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/HomePage/HomePage";
import Login from "./containers/LoginPage/LoginPage";
import Dashboard from "./containers/DashboardPage/DashboardPage";
import SignIn from "./containers/SignInPage/SignInPage";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Footer from "./components/common/Footer";
import MyAccount from "./containers/MyAccountPage/MyAccountPage";
import ArchivedPage from "./containers/ArchivedPage/ArchivedPage";
import AddExpensePage from "./containers/AddExpesnsePage/AddExpense";
import ViewExpensesPage from "./containers/ViewExpensesPage/ViewExpensesPage";
import EditExpensePage from "./containers/EditExpensesPage/EditExpensePage";

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
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/Account",
    element: <MyAccount />,
  },
  {
    path: "/Archived",
    element: <ArchivedPage />,
  },
  {
    path: "/AddItem",
    element: <AddExpensePage />,
  },
  {
    path: "/ViewItem",
    element: <ViewExpensesPage />,
  },
  {
    path: "/EditItem",
    element: <EditExpensePage />,
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
