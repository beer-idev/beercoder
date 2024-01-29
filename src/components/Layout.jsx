
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loading from "./Loading";

const Layout = ({ children }) => {
 
  return (
    <div>
      <Navbar />
     
          {children}
       
      <Footer />
    </div>
  );
};
export default Layout;
