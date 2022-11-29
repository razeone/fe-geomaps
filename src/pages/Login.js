import {React, lazy} from "react";

const Navigation = lazy(() => import('../components/Navigation'));
const LoginForm = lazy(() => import('../components/LoginForm'));
const Footer = lazy(() => import('../components/Footer'));

function Login() {
  return (
    <div>
        <Navigation />
        <LoginForm />
        <br />
        <Footer />
    </div>
  );
}

export default Login;