import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";
import Todo from "./pages/Todo";

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <Layout>
                <HomePage />
              </Layout>
            </AuthRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <Layout>
              <Todo />
            </Layout>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
