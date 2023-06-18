import "../fomatGeneral.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import RegisterForm from "../registerForm/registerForm";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar className="nav-header" />
      <Header className="nav-header" />
      <Homepage />
      <RegisterForm />
      <Footer />
    </div>
  );
};
export default Home;
