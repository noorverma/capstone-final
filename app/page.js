'use client'
import Header from "./component/Header";
import LoginForm from "./component/LoginForm";
import Footer from "./component/Footer";

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
