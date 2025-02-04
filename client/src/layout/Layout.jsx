import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";

const DefaultlayoutHoc = (Component) => ({ ...props }) => {
  return (
    <div>
      <Navbar />
      <Component {...props} />
      <Footer/>
    </div>
  );
};

export default DefaultlayoutHoc;
