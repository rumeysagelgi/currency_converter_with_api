import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-start via-mid to-end min-h-screen">
      <SEO />
      {children}
    </div>
  );
};

export default Layout;
