import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegisterPage = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
