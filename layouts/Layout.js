import Footer from "../components/Footers/Footer"
import Header from "../components/Headers/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
