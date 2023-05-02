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
import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase-config";
import { async } from "@firebase/util";
import LoadingScreen from "./components/common/LoadingScreen/LoadingScreen";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";

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
    path: "/account",
    element: (
      <PrivateRoute>
        <MyAccount />
      </PrivateRoute>
    ),
  },
  {
    path: "/archived",
    element: (
      <PrivateRoute>
        <ArchivedPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/additem",
    element: (
      <PrivateRoute>
        <AddExpensePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/viewitem/:id",
    element: (
      <PrivateRoute>
        <ViewExpensesPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/edititem/:id",
    element: (
      <PrivateRoute>
        <EditExpensePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/editprofile",
    element: (
      <PrivateRoute>
        <EditProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/uploadprofilepicture",
    element: (
      <PrivateRoute>
        <ProfilePictureUpload />
      </PrivateRoute>
    ),
  },
]);

function App() {
  const { showLoading } = useSelector((state) => state.loading);
  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     const minData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     console.log("minData", minData);
  //   };

  //   getUsers();
  // }, []);
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
