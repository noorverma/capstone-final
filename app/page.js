'use client'
import Header from "./component/Header";
<<<<<<< HEAD
import LoginForm from "./component/LoginForm";
import Footer from "./component/Footer";
=======
import Footer from "./component/Footer";
import LoginForm from "./component/LoginForm";
>>>>>>> 0b662665796a3b66325c6e4039f4d27fa2fdb1a8

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex-grow items-center justify-center">
        <LoginForm/>
      </div>
      <Footer/>
    </main>
  );
};

export default HomePage;
