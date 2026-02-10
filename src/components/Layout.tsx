import { Outlet } from "react-router-dom";
import Header from "./Header";
import {Footer} from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">

      <Header />
      <FloatingWhatsApp />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
