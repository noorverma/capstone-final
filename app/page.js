'use client'
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

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
