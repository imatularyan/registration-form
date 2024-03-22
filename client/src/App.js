import { ForgotPassword } from "./components/ForgotPassword";
import { ResetPassword } from "./components/ResetPassword";
import Layout from "./components/Layout";
import SignInForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import { Outlet, createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "signup",
        element: <SignupForm />,
      },
      {
        path: "signin",
        element: <SignInForm />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default App;
