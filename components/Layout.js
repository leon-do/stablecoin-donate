import Header from "./_Header";
import Footer from "./_Footer";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
};

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
