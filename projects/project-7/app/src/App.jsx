import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Lazy-loaded Components
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Support = React.lazy(() => import("./pages/Support/Support"));
const TransactionPage = React.lazy(() => import("./pages/Transaction/Transaction"));
const Signup = React.lazy(() => import("./pages/Auth/Signup/Signup"));
const Signin = React.lazy(() => import("./pages/Auth/Signin/Signin"));
const ForgotPassword = React.lazy(() => import("./pages/Auth/ForgotPassword/ForgotPassword"));
const RegisterEmailVerify = React.lazy(() => import("./pages/Auth/RegisterEmailVerify/RegisterEmailVerify"));
const RegisterSuccess = React.lazy(() => import("./pages/Auth/RegisterSuccess/RegisterSuccess"));
const SuccessfulSent = React.lazy(() => import("./pages/Auth/SuccesfullSent/SuccessfulSent")); // Fixed path
const ForgotPasswordSent = React.lazy(() => import("./pages/Auth/ForgotPasswordSent/ForgotPasswordSent"));
const ResetPassword = React.lazy(() => import("./pages/Auth/ResetPassword/ResetPassword"));
const ResetPasswordSuccess = React.lazy(() => import("./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess"));

// Define QueryClient outside App to prevent re-creation on every render
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/transactions",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <TransactionPage />
      </Suspense>
    ),
  },
  {
    path: "/support",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Support />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/signin",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Signin />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "/register-email-verify",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterEmailVerify />
      </Suspense>
    ),
  },
  {
    path: "/register-success",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterSuccess />
      </Suspense>
    ),
  },
  {
    path: "/successful-sent",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessfulSent />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password-sent",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPasswordSent />
      </Suspense>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: "/reset-password-success",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordSuccess />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
