import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/HomePage/HomePage";
import Login from "./containers/LoginPage/LoginPage";
import Dashboard from "./containers/DashboardPage/DashboardPage";
import SignUp from "./containers/SignUpPage/SignUpPage";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Footer from "./components/common/Footer";
import MyAccount from "./containers/MyAccountPage/MyAccountPage";
import ArchivedPage from "./containers/ArchivedPage/ArchivedPage";
import AddExpensePage from "./containers/AddExpesnsePage/AddExpense";
import ViewExpensesPage from "./containers/ViewExpensesPage/ViewExpensesPage";
import EditExpensePage from "./containers/EditExpensesPage/EditExpensePage";
import EditProfilePage from "./containers/EditProfilePage/EditProfilePage";
import ProfilePictureUpload from "./components/ProfilePictureUpload/ProfilePictureUpload";
import LoadingScreen from "./components/common/LoadingScreen/LoadingScreen";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import IncreaseEarningsPage from "./containers/IncreaseEarnings/IncreaseEarnings";

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
    path: "/dashboard/:id",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/account/:id",
    element: (
      <PrivateRoute>
        <MyAccount />
      </PrivateRoute>
    ),
  },
  {
    path: "/archived/:id",
    element: (
      <PrivateRoute>
        <ArchivedPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/additem/:id",
    element: (
      <PrivateRoute>
        <AddExpensePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/viewitem/:id/:itemid",
    element: (
      <PrivateRoute>
        <ViewExpensesPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/edititem/:id/:itemid",
    element: (
      <PrivateRoute>
        <EditExpensePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/editprofile/:id",
    element: (
      <PrivateRoute>
        <EditProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/uploadprofilepicture/:id",
    element: (
      <PrivateRoute>
        <ProfilePictureUpload />
      </PrivateRoute>
    ),
  },
  {
    path: "/increaseearnings/:id",
    element: (
      <PrivateRoute>
        <IncreaseEarningsPage />
      </PrivateRoute>
    ),
  },
]);

function App() {
  const { showLoading } = useSelector((state) => state.loading);

  return (
    <>
      <div className="main-app-container">
        {showLoading && <LoadingScreen />}
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
