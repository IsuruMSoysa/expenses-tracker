import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import LoadingScreen from "./components/common/LoadingScreen/LoadingScreen";

const LazyAppComponent = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingScreen />}>
        <LazyAppComponent />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
