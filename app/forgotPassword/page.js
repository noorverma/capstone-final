import Header from "../components/Header";
import Footer from "../components/Footer";
const ForgotPasswordScreen = () => {
    return (
      <main className="min-h-screen flex flex-col">
        <Header/>
        <div className="font-bold text-red-500 bg-blue-100  py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <text> Well then find it dude </text>
        </div>
        <Footer/>
      </main>
    );
  };
  
export default ForgotPasswordScreen;
